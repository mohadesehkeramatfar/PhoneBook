import { useEffect, useRef, useState } from "react";
import style from "./addContact.module.css"
import { useFormik } from "formik";
import * as yup from "yup"
import postContact from "../../ServicesHttp/postContact"
import {FaCheck} from "react-icons/fa"



const AddContact = () => {
    const[flag,setFlag]=useState(false)
        const formik =useFormik({
        initialValues:{
            name:"",
            email:"",
            // sex:"",
            address:""
        },
        onSubmit:(values)=>{
            postContact(values)
            setFlag(true)
           formik.handleReset()
     
        },
        validationSchema:yup.object({
            name:yup.string().required("لطفا نام را وارد کنید"),
            email:yup.string().required("لطفا ایمیل را وارد کنید"),
        }),
         validateOnMount:true,   
    }) 
    const inputRef=useRef()
console.log(formik);

    useEffect(()=>{
        inputRef.current.focus()

    },[])


    return (           
        <form className={style.formAddContact} onSubmit={formik.handleSubmit}>
            {flag && <section className={style.titleAlarm}><FaCheck className={style.facheck}/> ثبت نام با موفقیت ثبت شد</section>}
             {/* {!validateOnMount && {sty} */}
            <input type="text" placeholder="نام" name="name" ref={inputRef} className={style.input} {...formik.getFieldProps("name")}/>
            {formik.errors.name && formik.touched.name && (<p className={style.boxError}>{formik.errors.name}</p>)}
           
            <input type="text" placeholder="ایمیل" name="email" className={style.input} {...formik.getFieldProps("email")}/>
            {formik.errors.email && formik.touched.email && (<p  className={style.boxError}>{formik.errors.email}</p>)}
            
             <textarea className={style.input} placeholder="ادرس"  name="address" {...formik.getFieldProps("address")}/>
          
            {/* <select onChange={formik.handleChange}  name="sex" className={style.sexList}>
                <option value="">جنسیت را انتخاب کنید</option>
                <option value="0">مرد</option>
                <option value="1">زن</option>
            </select> */}
            <button className={style.btnadd} type="submit" disabled={!formik.isValid}>ثبت نام</button>
        </form>
   
     );
}
 
export default AddContact;