// TODO: answer here
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Heading,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  Button,
  TableContainer,
  Tfoot,
  TableCaption,
} from "@chakra-ui/react";
import "../styles/table.css";

const Student = () => {
  // TODO: answer here
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/student");
      const data = await response.json();
      setStudents(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data: ", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.log("Error deleting student: ", error);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredStudents =
    filter === "All"
      ? students
      : students.filter((student) => student.faculty === filter);

  return (
    <>
      <Box className="student-data">
        <Box className="container">
          <Heading as="h1">Student</Heading>
          <Heading as="h1">List</Heading>
          <Select
            value={filter}
            onChange={handleFilterChange}
            data-testid="filter"
            iconColor="transparent"
          >
            <option value="All">All</option>
            <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
            <option value="Fakultas Ilmu Sosial dan Politik">
              Fakultas Ilmu Sosial dan Politik
            </option>
            <option value="Fakultas Teknik">Fakultas Teknik</option>
            <option value="Fakultas Teknologi Informasi dan Sains">
              Fakultas Teknologi Informasi dan Sains
            </option>
          </Select>
        </Box>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <TableContainer className="test-table-container">
            <Table id="table-student" className="test-table">
              <Thead className="test-thead">
                <Tr className="test-tr">
                  <Th className="test-th" fontSize="16px">
                    No
                  </Th>
                  <Th className="test-th" fontSize="16px">
                    Full Name
                  </Th>
                  <Th className="test-th" fontSize="16px">
                    Faculty
                  </Th>
                  <Th className="test-th" fontSize="16px">
                    Program Study
                  </Th>
                  <Th className="test-th" fontSize="16px">
                    Option
                  </Th>
                </Tr>
              </Thead>
              <Tbody className="test-tbody">
                {filteredStudents.map((student, index) => (
                  <Tr key={student.id} className="student-data-row test-tr">
                    <Td data-label="No" className="test-td">
                      {index + 1}
                    </Td>
                    <Td data-label="Full Name" className="test-td">
                      <Link
                        as={RouterLink}
                        to={`/student/${student.id}`}
                        className="test-link"
                      >
                        {student.fullname}
                      </Link>
                    </Td>
                    <Td data-label="Faculty" className="test-td">
                      {student.faculty}
                    </Td>
                    <Td data-label="Program Study" className="test-td">
                      {student.programStudy}
                    </Td>
                    <Td data-label="Option" className="test-td">
                      <Button
                        onClick={() => handleDelete(student.id)}
                        data-testid={`delete-${student.id}`}
                        id="del-btn"
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot className="test-tfoot"></Tfoot>
              <TableCaption className="test-table-caption">
                Student Table by Ananda Irvan Tri Kurniawan
              </TableCaption>
            </Table>
          </TableContainer>
        )}
      </Box>
    </>
  );
};

export default Student;
