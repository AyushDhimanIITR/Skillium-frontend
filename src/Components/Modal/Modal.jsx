import { useState, useEffect } from "react";
import styles from "./modal.module.css";
import {API_DOMAIN} from "../../js/config";
import {useCookies} from "react-cookie";


const EditFormModal = ({ setModal }) => {

  const [cookie] = useCookies();
  const [formData, setFormData] = useState({name: "",email: "",school: ""});

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setModal(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);



//   const [value, setValue] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));  
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    const data = await fetch(`${API_DOMAIN}students/${localStorage.getItem('user')}`, {
      method:"PATCH",
      headers:{
        Authorization: `Bearer ${cookie.token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: formData.name, email: formData.email})
    });
    console.log(data);
    setModal(false);
    window.location.reload();
  };

  return (
    <>
      <div
        className={styles.modalBackground}
        onClick={() => setModal(false)}
        ></div>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className={styles.title}>Update Profile Details</div>
            <br />
        <div className={styles.body}>
          <form onSubmit={handleSubmit}>

            <input
              className={styles.inputMobileView}
              placeholder="Your Name"
              type="text"
              onChange={handleChange}
              value={formData.name}
              id="name" name="name"
              required
            />
            
            {/* <input
              className={styles.inputMobileView}
              placeholder="Email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              id="email" name="email"
            /> */}
            
            {/* <input
              placeholder="School"
              type="text"
              onChange={handleChange}
              value={formData.school}
              id="school" name="school"
            /> */}
            
            <button className={styles.submitBtn} type="submit">Submit <span></span> </button>
          </form>
        </div>
        <div className={styles.footer}></div>
      </div>
    </>
  );
};
export default EditFormModal;
