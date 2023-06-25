// TODO: answer here
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Heading, Input, Button, Select } from "@chakra-ui/react";
import "../styles/form.css";

const AddStudent = () => {
  // TODO: answer here
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    profilePicture: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    programStudy: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3001/student}`)
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleProfilePictureChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      profilePicture: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthDate,
      gender,
      programStudy,
    } = formData;

    const faculty = getFacultyByProgramStudy(programStudy);

    const newStudent = {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthDate,
      gender,
      faculty,
      programStudy,
    };

    fetch("http://localhost:3001/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/student");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getFacultyByProgramStudy = (programStudy) => {
    let faculty = "";

    switch (programStudy) {
      case "Ekonomi":
      case "Manajemen":
      case "Akuntansi":
        faculty = "Fakultas Ekonomi";
        break;
      case "Administrasi Publik":
      case "Administrasi Bisnis":
      case "Hubungan Internasional":
        faculty = "Fakultas Ilmu Sosial dan Politik";
        break;
      case "Teknik Sipil":
      case "Arsitektur":
        faculty = "Fakultas Teknik";
        break;
      case "Matematika":
      case "Fisika":
      case "Informatika":
        faculty = "Fakultas Teknologi Informasi dan Sains";
        break;
      default:
        faculty = "";
        break;
    }

    return faculty;
  };

  return (
    <>
      <div className="box">
        <div className="form-container">
          <form id="form-student" onSubmit={handleSubmit}>
            <Heading as="h2">Add Student</Heading>
            <div className="box-form">
              <div className="input-group">
                <img
                  src={formData.profilePicture}
                  alt="Profile"
                  data-testid="previewPicture"
                />
                <label>
                  Full Name:
                  <Input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    data-testid="name"
                  />
                </label>
                <label>
                  Profile Picture:
                  <Input
                    type="text"
                    name="profilePicture"
                    value={formData.profilePicture}
                    onChange={handleProfilePictureChange}
                    data-testid="profilePicture"
                  />
                </label>
                <label>
                  Address:
                  <Input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    data-testid="address"
                  />
                </label>
                <label>
                  Phone Number:
                  <Input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    data-testid="phoneNumber"
                  />
                </label>
                <div className="row">
                  <label>
                    Birth Date:
                    <Input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      data-testid="date"
                    />
                  </label>
                  <label>
                    Gender:
                    <Select
                      name="gender"
                      id="input-gender"
                      data-testid="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">--- Silahkan Pilih Gander ---</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Select>
                  </label>
                </div>
                <label htmlFor="input-prody"> Program Study</label>
                <Select
                  name="programStudy"
                  id="input-prody"
                  data-testid="prody"
                  value={formData.programStudy}
                  onChange={handleChange}
                  required
                >
                  <option value="">--- Silahkan Pilih Program Studi ---</option>
                  <option value="Ekonomi">Ekonomi</option>
                  <option value="Manajemen">Manajemen</option>
                  <option value="Akuntansi">Akuntansi</option>
                  <option value="Administrasi Publik">
                    Administrasi Publik
                  </option>
                  <option value="Administrasi Bisnis">
                    Administrasi Bisnis
                  </option>
                  <option value="Hubungan Internasional">
                    Hubungan Internasional
                  </option>
                  <option value="Teknik Sipil">Teknik Sipil</option>
                  <option value="Arsitektur">Arsitektur</option>
                  <option value="Matematika">Matematika</option>
                  <option value="Fisika">Fisika</option>
                  <option value="Informatika">Informatika</option>
                </Select>
              </div>
              <Button type="submit" id="add-btn" data-testid="add-btn">
                Add Student
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
