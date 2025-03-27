import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';

const RegistrationForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    acceptedRules: false,
    teamName: '',
    leaderName: '',
    leaderPhone: '',
    leaderEmail: '',
    teamSize: '',
    member2Name: '',
    member2Email: '',
    member3Name: '', 
    member3Email: ''
  });

  const rules = [
    "Participants must write their code from scratch. Forking or cloning existing repositories is strictly prohibited",
    "Submissions should be deployed, hosted and accessible to the public", 
  ];

  const validationSchemas = {
    2: Yup.object({
      teamName: Yup.string().required('Team name is required'),
      leaderName: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed')
        .required('Leader name is required'),
      leaderPhone: Yup.string()
        .matches(/^[0-9]+$/, 'Only numbers are allowed')
        .length(10, 'Phone number must be 10 digits')
        .required('Phone number is required'),
      leaderEmail: Yup.string()
        .matches(/^[A-Za-z0-9._%+-]+$/, 'Invalid email format')
        .required('Email is required')
    }),
    3: Yup.object({
      teamSize: Yup.number()
        .min(1, 'Minimum 1 member required')
        .max(3, 'Maximum 3 members allowed')
        .required('Team size is required'),
      member2Name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed')
        .when('teamSize', {
          is: size => size >= 2,
          then: schema => schema.required('Member 2 name is required')
        }),
      member2Email: Yup.string()
        .when('teamSize', {
          is: size => size >= 2,
          then: schema => schema.required('Member 2 email is required')
        }),
      member3Name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed')
        .when('teamSize', {
          is: size => size >= 3,
          then: schema => schema.required('Member 3 name is required')
        }),
      member3Email: Yup.string()
        .when('teamSize', {
          is: size => size >= 3,
          then: schema => schema.required('Member 3 email is required')
        })
    })
  };

  const handlePageSubmit = (values, { setSubmitting }) => {
    setFormData(prev => ({...prev, ...values}));
    if (currentPage < 3) {
      setCurrentPage(prev => prev + 1);
    } else {
      handleFinalSubmit(values);
    }
    setSubmitting(false);
  };

  const handleFinalSubmit = (values) => {
    const finalData = {...formData, ...values};
    console.log('Final form data:', finalData);
    // Handle form submission
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
                  onChange={() => setFormData(prev => ({...prev, acceptedRules: !prev.acceptedRules}))}
                  className="mr-3 w-4 h-4 accent-violet-500"
                />
                <label className="text-gray-200">I accept the rules and regulations</label>
              </div>
              <button
                onClick={() => formData.acceptedRules && setCurrentPage(2)}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  formData.acceptedRules
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
                  teamName: formData.teamName,
                  leaderName: formData.leaderName,
                  leaderPhone: formData.leaderPhone,
                  leaderEmail: formData.leaderEmail
                }}
                validationSchema={validationSchemas[2]}
                onSubmit={handlePageSubmit}
              >
                {({ isValid }) => (
                  <Form className="space-y-6 flex flex-col items-center">
                    <div className="w-full max-w-md">
                      <Field
                        name="teamName"
                        type="text"
                        placeholder="Team Name"
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                      />
                      <ErrorMessage name="teamName" component="div" className="text-red-400 mt-1" />
                    </div>

                    <div className="w-full max-w-md">
                      <Field
                        name="leaderName"
                        type="text"
                        placeholder="Team Leader Name"
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                      />
                      <ErrorMessage name="leaderName" component="div" className="text-red-400 mt-1" />
                    </div>

                    <div className="w-full max-w-md">
                      <Field
                        name="leaderPhone"
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                      />
                      <ErrorMessage name="leaderPhone" component="div" className="text-red-400 mt-1" />
                    </div>

                    <div className="relative w-full max-w-md">
                      <Field
                        name="leaderEmail"
                        type="text"
                        placeholder="Email"
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">@st.niituniversity.in</span>
                      <ErrorMessage name="leaderEmail" component="div" className="text-red-400 mt-1" />
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
                        className={`w-1/2 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                          isValid
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
                  teamSize: formData.teamSize,
                  member2Name: formData.member2Name,
                  member2Email: formData.member2Email,
                  member3Name: formData.member3Name,
                  member3Email: formData.member3Email
                }}
                validationSchema={validationSchemas[3]}
                onSubmit={handlePageSubmit}
              >
                {({ values, isValid }) => (
                  <Form className="space-y-6 flex flex-col items-center">
                    <div className="w-full max-w-md">
                      <Field
                        name="teamSize"
                        as="select"
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                      >
                        <option value="" className="bg-gray-800">Select team size</option>
                        <option value="1" className="bg-gray-800">1</option>
                        <option value="2" className="bg-gray-800">2</option>
                        <option value="3" className="bg-gray-800">3</option>
                      </Field>
                      <ErrorMessage name="teamSize" component="div" className="text-red-400 mt-1" />
                    </div>

                    {values.teamSize >= 2 && (
                      <>
                        <div className="w-full max-w-md">
                          <Field
                            name="member2Name"
                            type="text"
                            placeholder="Team Member 2 Name"
                            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                          />
                          <ErrorMessage name="member2Name" component="div" className="text-red-400 mt-1" />
                        </div>

                        <div className="relative w-full max-w-md">
                          <Field
                            name="member2Email"
                            type="text"
                            placeholder="Member 2 Email"
                            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">@st.niituniversity.in</span>
                          <ErrorMessage name="member2Email" component="div" className="text-red-400 mt-1" />
                        </div>
                      </>
                    )}

                    {values.teamSize >= 3 && (
                      <>
                        <div className="w-full max-w-md">
                          <Field
                            name="member3Name"
                            type="text"
                            placeholder="Team Member 3 Name"
                            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                          />
                          <ErrorMessage name="member3Name" component="div" className="text-red-400 mt-1" />
                        </div>

                        <div className="relative w-full max-w-md">
                          <Field
                            name="member3Email"
                            type="text"
                            placeholder="Member 3 Email"
                            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">@st.niituniversity.in</span>
                          <ErrorMessage name="member3Email" component="div" className="text-red-400 mt-1" />
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
                        className={`w-1/2 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                          isValid && values.teamSize
                            ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!isValid || !values.teamSize}
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
              className={`h-2 w-2 rounded-full ${
                page === currentPage ? 'bg-violet-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
