"use client"

import formStyles from "./form.module.css"
import { Formik } from 'formik';
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ["latin"],weight:["700"]})

const Form = () => {
  return (
    <div className={formStyles.formContainer} style={roboto.style}>
      <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Email Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Valid email required';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
          <div style={{width: "92%",display: 'flex',justifyContent:'space-between'}}>
          <label style={{fontSize:"0.7rem"}}>Email address</label>
             <p style={{fontSize: "10px", color: "#ff9047"}}>{errors.email && touched.email && errors.email}</p>
          </div>
           
           <input
            //  style={{width:"90%", margin: "5px 0", borderRadius:'10px',lineHeight: "2.5rem", border: "2px solid "}} 
             className={formStyles.inputClass}
             style={{backgroundColor: errors.email && "#ffe8e5", color: errors.email && "#f77882", border: errors.email && "1px solid #c98e89"}}
             onFocus={{color: "#f77882"}}
             type="email"
             name="email"
             placeholder="email@company.com"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           
           <button style={{fontWeight: 200}} className={formStyles.submitBtn} type="submit" disabled={isSubmitting}>
             Subscribe to monthly newslatter
           </button>
         </form>
       )}
     </Formik>
        {/* <form className={formStyles.formElements}>
            <label>Email address</label>
            <input
                placeholder="email@company.com"
            />
            <button>
                Subscribe to monthly newslatter
            </button>
        </form> */}
    </div>
  )
}

export default Form