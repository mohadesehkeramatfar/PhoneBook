import { useEffect, useState } from "react";
import getContacts from "../../ServicesHttp/getContacts";
import { FaUser } from "react-icons/fa";
import { BiTrash, BiEdit } from "react-icons/bi";
import deleteContact from "../../ServicesHttp/deleteContact";
import style from "./ShowContact.module.css";
import { Link } from "react-router-dom";
import Select from "react-select";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";

const optionSort = [
  { value: "0", label: "صعودی" },
  { value: "1", label: "نزولی" },
];

const ShowContact = (props) => {
 

  const [contacts, setContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [flag, setFlag] = useState(true);
  const [sort, setSort] = useState([]);

  useEffect(() => {
    getContacts()
      .then((res) => {
        setContacts(res.data);
        setAllContacts(res.data);
        setFlag(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (id) => {
    deleteContact(id);
    const seleteContact = contacts.filter((itm) => itm.id !== id);
    setAllContacts(seleteContact);
    setContacts(seleteContact);
  };

  const searchHandler = (e) => {
    setFlag(true);
    const search = e.target.value;
    setSearchTerm(search);
    if (search === "") {
      setAllContacts(contacts);
    } else {
      const searchR = contacts.filter((c) => {
        return (
          Object.values(c).join(" ").includes(search)
          // console.log(Object.values(c).join(" ").includes(search))
        );
      });
      if (searchR.length > 0) {
        setAllContacts(searchR);
      } else {
        setFlag(false);
      }
    }
  };

  const sortHandler = (e) => {
    console.log(e.value);
    if (e.value === "0") {
      const sortR = _.orderBy(allContacts, ["name"], ["asc"]);
      setSort(sortR);
      setAllContacts(sortR);
    } else {
      const sortR = _.orderBy(allContacts, ["name"], ["desc"]);
      setSort(sortR);
      setAllContacts(sortR);
    }
  };

  return (
    <div>
      <div className={style.filterSearchBox}>
        <Select
          className={style.sortSelect}
          // value={sort}
          onChange={sortHandler}
          options={optionSort}
        />{" "}
        <span>مرتب سازی بر اساس نام:</span>
        <input
          type="text"
          value={searchTerm}
          className={style.input}
          placeholder="جستجو...."
          onChange={searchHandler}
        />
      </div>
      {!flag && (
        <h5 className={style.title}>
          {" "}
          متاسفانه هیچ شماره تلفنی با مشخصات وارد شده موجود نیست
        </h5>
      )}
      {/* {(allContacts.length>0)  ? <h3 className={style.title}>لیست مخاطبین</h3> :<h3 className={style.title}>متاسفانه هیچ شماره تلفنی ثبت نشده است!!!</h3>} */}
      {allContacts.map((contact) => {
        return (
          <div className={style.boxInfo} key={contact.id}>
            <div className={style.logoIcon}>
              <span>
                <BiTrash
                  className={`${style.icon} ${style.trashIcon}`}
                  onClick={() => deleteHandler(contact.id)}
                />
              </span>
              <Link
                to={{
                  pathname: `EditContacts/${contact.id}`,
                  state: { contact },
                }}
              >
                <BiEdit className={`${style.icon} ${style.editIcon}`} />
              </Link>
            </div>

            <Link className={style.infoUser} to={`ShowContact/${contact.id}`}>
              <p>
                <span className={style.titleInfo}>نام: </span>
                {contact.name}
              </p>
              <p>
                <span className={style.titleInfo}>ایمیل: </span>
                {contact.email}
              </p>
            </Link>

            <div className={style.logouser}>
              <FaUser />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowContact;
