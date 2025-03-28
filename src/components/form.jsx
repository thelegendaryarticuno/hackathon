import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { SuccessDialog, ErrorDialog } from './response';

const RegistrationForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    acceptedRules: false,
    TeamName: '',
    LeaderName: '',
    LeaderPhone: '',
    LeaderEmail: '',
    TeamMemberNumber: '',
    TeamMember2Name: '',
    TeamMember2Email: '',
    TeamMember3Name: '',
    TeamMember3Email: ''
  });
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [leaderName, setLeaderName] = useState('');

  const rules = [
    "Participants must design and code everything from scratch, within the given time",
    "Participants must write their code from scratch. Forking or cloning existing repositories is strictly prohibited",
    "Submissions should be deployed, hosted and accessible to the public",
  ];

  const validationSchemas = {
    2: Yup.object({
      TeamName: Yup.string().required('Team name is required'),
      LeaderName: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed')
        .required('Leader name is required'),
      LeaderPhone: Yup.string()
        .matches(/^[0-9]+$/, 'Only numbers are allowed')
        .length(10, 'Phone number must be 10 digits')
        .required('Phone number is required'),
      LeaderEmail: Yup.string()
        .matches(/^[A-Za-z0-9._%+-]+$/, 'Invalid email format')
        .required('Email is required')
    }),
    3: Yup.object({
      TeamMemberNumber: Yup.number()
        .min(1, 'Minimum 1 member required')
        .max(3, 'Maximum 3 members allowed')
        .required('Team member number is required'),
      TeamMember2Name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed')
        .when('TeamMemberNumber', {
          is: size => size >= 2,
          then: schema => schema.required('Member 2 name is required')
        }),
      TeamMember2Email: Yup.string()
        .when('TeamMemberNumber', {
          is: size => size >= 2,
          then: schema => schema.required('Member 2 email is required')
        }),
      TeamMember3Name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed')
        .when('TeamMemberNumber', {
          is: size => size >= 3,
          then: schema => schema.required('Member 3 name is required')
        }),
      TeamMember3Email: Yup.string()
        .when('TeamMemberNumber', {
          is: size => size >= 3,
          then: schema => schema.required('Member 3 email is required')
        })
    })
  };

  const handlePageSubmit = (values, { setSubmitting }) => {
    setFormData(prev => ({ ...prev, ...values }));
    if (currentPage < 3) {
      setCurrentPage(prev => prev + 1);
    } else {
      handleFinalSubmit(values);
    }
    setSubmitting(false);
  };

  const handleFinalSubmit = async (values) => {
    const finalData = { ...formData, ...values };
    delete finalData.acceptedRules;

    // Convert TeamMemberNumber to number
    finalData.TeamMemberNumber = Number(finalData.TeamMemberNumber);

    // Add @st.niituniversity.in to emails
    finalData.LeaderEmail = `${finalData.LeaderEmail}@st.niituniversity.in`;

    if (finalData.TeamMemberNumber >= 2) {
      finalData.TeamMember2Email = `${finalData.TeamMember2Email}@st.niituniversity.in`;
    }

    // Only include Team Member 3 data if TeamMemberNumber is 3
    if (finalData.TeamMemberNumber < 3) {
      delete finalData.TeamMember3Name;
      delete finalData.TeamMember3Email;
    } else {
      finalData.TeamMember3Email = `${finalData.TeamMember3Email}@st.niituniversity.in`;
    }

    try {
      const registerResponse = await axios.post('https://apihackorate.sinusoid.in/api/teams/register', finalData);
      if (registerResponse.data.message === 'Team registered successfully!') {
        setLeaderName(registerResponse.data.team.LeaderName);
        setSuccessDialogOpen(true);
      } else {
        setErrorDialogOpen(true);
      }
    } catch (error) {
      setErrorDialogOpen(true);
    }
  };

  const pageTransition = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.3 }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[80vh] h-[85vh] bg-gray-800 p-8 mt-16 rounded-xl shadow-2xl overflow-y-auto">
        <AnimatePresence mode="wait">
          {currentPage === 1 && (
            <motion.div {...pageTransition} key="page1" className="text-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text">Rules & Regulations</h2>
              <ul className="space-y-4 mb-6">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start bg-gray-700/50 p-4 rounded-lg shadow-sm">
                    <span className="text-violet-400 mr-3 text-lg">•</span>
                    <span className="text-gray-200">{rule}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center mb-6 bg-gray-700/50 p-4 rounded-lg">
                <input
                  type="checkbox"
                  checked={formData.acceptedRules}
                  onChange={() => setFormData(prev => ({ ...prev, acceptedRules: !prev.acceptedRules }))}
                  className="mr-3 w-4 h-4 accent-violet-500"
                />
                <label className="text-gray-200">I accept the rules and regulations</label>
              </div>
              <button
                onClick={() => formData.acceptedRules && setCurrentPage(2)}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${formData.acceptedRules
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                disabled={!formData.acceptedRules}
              >
                Next
              </button>
            </motion.div>
          )}

          {currentPage === 2 && (
            <motion.div {...pageTransition} key="page2" className="text-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text">Team Leader Details</h2>
              <Formik
                initialValues={{
                  TeamName: formData.TeamName,
                  LeaderName: formData.LeaderName,
                  LeaderPhone: formData.LeaderPhone,
                  LeaderEmail: formData.LeaderEmail
                }}
                validationSchema={validationSchemas[2]}
                onSubmit={handlePageSubmit}
              >
                {({ isValid }) => (
                  <Form className="space-y-6 flex flex-col items-center">
                    <div className="w-full max-w-md">
                      <Field
                        name="TeamName"
                        type="text"
                        placeholder="Team Name"
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                      />
                      <ErrorMessage name="TeamName" component="div" className="text-red-400 mt-1" />
                    </div>

                    <div className="w-full max-w-md">
                      <Field
                        name="LeaderName"
                        type="text"
                        placeholder="Team Leader Name"
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                      />
                      <ErrorMessage name="LeaderName" component="div" className="text-red-400 mt-1" />
                    </div>

                    <div className="w-full max-w-md">
                      <Field
                        name="LeaderPhone"
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                      />
                      <ErrorMessage name="LeaderPhone" component="div" className="text-red-400 mt-1" />
                    </div>

                    <div className="relative w-full max-w-md">
                      <Field
                        name="LeaderEmail"
                        type="text"
                        placeholder="Email"
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">@st.niituniversity.in</span>
                      <ErrorMessage name="LeaderEmail" component="div" className="text-red-400 mt-1" />
                    </div>

                    <div className="flex space-x-4 w-full max-w-md">
                      <button
                        type="button"
                        onClick={() => setCurrentPage(1)}
                        className="w-1/2 py-3 px-4 rounded-lg font-semibold bg-gray-700 text-white hover:bg-gray-600 transition-all duration-300"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className={`w-1/2 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${isValid
                          ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg'
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                          }`}
                        disabled={!isValid}
                      >
                        Next
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </motion.div>
          )}

          {currentPage === 3 && (
            <motion.div {...pageTransition} key="page3" className="text-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text">Team Details</h2>
              <Formik
                initialValues={{
                  TeamMemberNumber: formData.TeamMemberNumber,
                  TeamMember2Name: formData.TeamMember2Name,
                  TeamMember2Email: formData.TeamMember2Email,
                  TeamMember3Name: formData.TeamMember3Name,
                  TeamMember3Email: formData.TeamMember3Email
                }}
                validationSchema={validationSchemas[3]}
                onSubmit={handlePageSubmit}
              >
                {({ values, isValid }) => (
                  <Form className="space-y-6 flex flex-col items-center">
                    <div className="w-full max-w-md">
                      <Field
                        name="TeamMemberNumber"
                        as="select"
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                      >
                        <option value="" className="bg-gray-800">Select team member number</option>
                        <option value="1" className="bg-gray-800">1</option>
                        <option value="2" className="bg-gray-800">2</option>
                        <option value="3" className="bg-gray-800">3</option>
                      </Field>
                      <ErrorMessage name="TeamMemberNumber" component="div" className="text-red-400 mt-1" />
                    </div>

                    {values.TeamMemberNumber >= 2 && (
                      <>
                        <div className="w-full max-w-md">
                          <Field
                            name="TeamMember2Name"
                            type="text"
                            placeholder="Team Member 2 Name"
                            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                          />
                          <ErrorMessage name="TeamMember2Name" component="div" className="text-red-400 mt-1" />
                        </div>

                        <div className="relative w-full max-w-md">
                          <Field
                            name="TeamMember2Email"
                            type="text"
                            placeholder="Member 2 Email"
                            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">@st.niituniversity.in</span>
                          <ErrorMessage name="TeamMember2Email" component="div" className="text-red-400 mt-1" />
                        </div>
                      </>
                    )}

                    {values.TeamMemberNumber >= 3 && (
                      <>
                        <div className="w-full max-w-md">
                          <Field
                            name="TeamMember3Name"
                            type="text"
                            placeholder="Team Member 3 Name"
                            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                          />
                          <ErrorMessage name="TeamMember3Name" component="div" className="text-red-400 mt-1" />
                        </div>

                        <div className="relative w-full max-w-md">
                          <Field
                            name="TeamMember3Email"
                            type="text"
                            placeholder="Member 3 Email"
                            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">@st.niituniversity.in</span>
                          <ErrorMessage name="TeamMember3Email" component="div" className="text-red-400 mt-1" />
                        </div>
                      </>
                    )}

                    <div className="flex space-x-4 w-full max-w-md">
                      <button
                        type="button"
                        onClick={() => setCurrentPage(2)}
                        className="w-1/2 py-3 px-4 rounded-lg font-semibold bg-gray-700 text-white hover:bg-gray-600 transition-all duration-300"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className={`w-1/2 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${isValid && values.TeamMemberNumber
                          ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg'
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                          }`}
                        disabled={!isValid || !values.TeamMemberNumber}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {[1, 2, 3].map(page => (
            <div
              key={page}
              className={`h-2 w-2 rounded-full ${page === currentPage ? 'bg-violet-500' : 'bg-gray-600'
                }`}
            />
          ))}
        </div>
      </div>

      <SuccessDialog
        isOpen={successDialogOpen}
        onClose={() => setSuccessDialogOpen(false)}
        leaderName={leaderName}
      />

      <ErrorDialog
        isOpen={errorDialogOpen}
        onClose={() => setErrorDialogOpen(false)}
      />
    </div>
  );
};

export default RegistrationForm;
