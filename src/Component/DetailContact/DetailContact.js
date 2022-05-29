import { useEffect, useState } from "react";
import getOneContact from "../../ServicesHttp/getOneContacts";
import style from "../../Pages/ShowContacts/ShowContact.module.css";

const DetailContact = ({ match, history }) => {
console.log(match);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    sex: "",
    address: "",
  });
  const id = match.params.id;

  useEffect(() => {
    getOneContact(id)
      .then((res) => {
        setContact(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={style.boxDetailInfo}>
      <section>
        <span>نام:</span>
        <span>{contact.name}</span>
      </section>

      <section>
        <span>ایمیل:</span>
        <span>{contact.email}</span>
      </section>
      <section>
        <span>ادرس:</span>
        <span>{contact.address}</span>
      </section>
      <section>
        <span>جنسیت:</span>
        <span>{contact.sex}</span>
      </section>
    </div>
  );
};

export default DetailContact;
