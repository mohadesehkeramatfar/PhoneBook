import style from "../../Pages/AddContact/addContact.module.css";
import { useEffect, useRef, useState } from "react";

import getOneContact from "../../ServicesHttp/getOneContacts";
import updateContact from "../../ServicesHttp/updateContact";

const EditContact = ({ match, history }) => {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    sex: "",
    address: "",
  });
  const inputRef = useRef();

  const inputHandler = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
    const fetchContact = async () => {
      const { data } = await getOneContact(match.params.id);
      console.log("data", data);
      try {
        setNewContact({
          name: data.name,
          email: data.email,
          sex: data.sex,
          address: data.address,
        });
        console.log("useeffect try newcontact", newContact);
        console.log("useeffect try data", data);
      } catch (error) {}
    };

    fetchContact();
  }, []);

  const submitHandler = async (e) => {
    console.log("submitHandler", newContact);
    e.preventDefault();
    try {
      await updateContact(match.params.id, newContact);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className={style.formAddContact} onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="نام"
        name="name"
        ref={inputRef}
        className={style.input}
        value={newContact.name}
        onChange={inputHandler}
      />

      <input
        type="text"
        placeholder="ایمیل"
        name="email"
        className={style.input}
        value={newContact.email}
        onChange={inputHandler}
      />

      <textarea
        className={style.input}
        placeholder="ادرس"
        name="address"
        onChange={inputHandler}
        value={newContact.address}
      />

      {/* <select onChange={inputHandler}  name="sex"  className={style.sexList}>
              <option  value="">جنسیت را انتخاب کنید</option>
              <option  value="0" >مرد</option>
              <option value="1" >زن</option>
          </select> */}
      <button className={style.btnadd} type="submit">
        ویرایش
      </button>
    </form>
  );
};

export default EditContact;
