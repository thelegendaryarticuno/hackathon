import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [acceptedRules, setAcceptedRules] = useState(false);

  const rules = [
    "All team members must be current students",
    "Each team can submit only one project", 
    "The project must be original work",
    "Code plagiarism will lead to immediate disqualification",
    "Teams must complete the project within the given timeframe",
    "All decisions by judges will be final and binding"
  ];

  const validationSchemaStep2 = Yup.object({
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
  });

  const validationSchemaStep3 = Yup.object({
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
  });

  const handleSubmit = (values) => {
    console.log(values);
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-gray-100"
          >
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
                checked={acceptedRules}
                onChange={() => setAcceptedRules(!acceptedRules)}
                className="mr-3 w-4 h-4 accent-violet-500"
              />
              <label className="text-gray-200">I accept the rules and regulations</label>
            </div>
            <button
              onClick={() => acceptedRules && setStep(2)}
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                acceptedRules
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
              disabled={!acceptedRules}
            >
              Next
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-gray-100"
          >
            <Formik
              initialValues={{
                teamName: '',
                leaderName: '',
                leaderPhone: '',
                leaderEmail: ''
              }}
              validationSchema={validationSchemaStep2}
              onSubmit={(values) => setStep(3)}
            >
              {({ isValid, dirty }) => (
                <Form className="space-y-6">
                  <div>
                    <Field
                      name="teamName"
                      type="text"
                      placeholder="Team Name"
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                    <ErrorMessage name="teamName" component="div" className="text-red-400 mt-1" />
                  </div>

                  <div>
                    <Field
                      name="leaderName"
                      type="text"
                      placeholder="Team Leader Name"
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                    <ErrorMessage name="leaderName" component="div" className="text-red-400 mt-1" />
                  </div>

                  <div>
                    <Field
                      name="leaderPhone"
                      type="text"
                      placeholder="Phone Number"
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                    <ErrorMessage name="leaderPhone" component="div" className="text-red-400 mt-1" />
                  </div>

                  <div className="relative">
                    <Field
                      name="leaderEmail"
                      type="text"
                      placeholder="Email"
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">@st.niituniversity.in</span>
                    <ErrorMessage name="leaderEmail" component="div" className="text-red-400 mt-1" />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      isValid && dirty
                        ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!(isValid && dirty)}
                  >
                    Next
                  </button>
                </Form>
              )}
            </Formik>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-gray-100"
          >
            <Formik
              initialValues={{
                teamSize: '',
                member2Name: '',
                member2Email: '',
                member3Name: '',
                member3Email: ''
              }}
              validationSchema={validationSchemaStep3}
              onSubmit={handleSubmit}
            >
              {({ values, isValid, dirty }) => (
                <Form className="space-y-6">
                  <div>
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
                      <div>
                        <Field
                          name="member2Name"
                          type="text"
                          placeholder="Team Member 2 Name"
                          className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                        />
                        <ErrorMessage name="member2Name" component="div" className="text-red-400 mt-1" />
                      </div>

                      <div className="relative">
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
                      <div>
                        <Field
                          name="member3Name"
                          type="text"
                          placeholder="Team Member 3 Name"
                          className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                        />
                        <ErrorMessage name="member3Name" component="div" className="text-red-400 mt-1" />
                      </div>

                      <div className="relative">
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

                  <button
                    type="submit"
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      isValid && dirty
                        ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!(isValid && dirty)}
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
