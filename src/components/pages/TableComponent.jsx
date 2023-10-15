import React, { Fragment, useEffect, useState } from 'react'
import { Table } from 'reactstrap'
import Sidebar from '../Sidebar'
import axios from 'axios'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const TableComponent = () => {
  const [array, setarray] = useState([]);
  let [obj, setobj] = useState({ hobbies: [], firstName: '', lastName: '', gender: '', city: '', age: '' });
  const [blankObj, setblankObj] = useState({});

  const getApiData = () => {
    axios
      .get("https://student-api.mycodelibraries.com/api/student/get")
      .then((res) => {
        console.log(res.data.data);

        setarray([...res.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getApiData()
  }, []);



  const editData = (id) => {
    axios.get('https://student-api.mycodelibraries.com/api/student/get-student-by-id?id=' + id).then((res) => {
      // console.log(res.data.data)
      res.data.data.hobbies = res.data.data.hobbies.split(',');
      setobj({ ...res.data.data });
      // setobj({ ...res.data.data })
    }).catch((err) => {
      console.log(err)
    })
  }

  const deleteData = (id) => {
    axios.delete('https://student-api.mycodelibraries.com/api/student/delete?id=' + id).then((res) => {
      console.log(res)
      getApiData();
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <Fragment>
      <Outlet />
      <div className='text-center mt-4 mb-2 fw-bold fs-5'>
        <h3>Table Component</h3>
        
      </div>

      <Table
      >
        <thead>
          <tr>
            <th>
              Sr.No.
            </th>
            <th>
              First Name
            </th>
            <th>
              Last Name
            </th>
            <th>
              Age
            </th>
            <th>
              City
            </th>
            <th>
              Gender
            </th>
            <th>
              Hobbies
            </th>
            <th>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {array?.map((x, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{x.firstName}</td>
                <td>{x.lastName}</td>
                <td>{x.age}</td>
                <td>{x.city}</td>
                <td>{x.gender}</td>
                <td>{x.hobbies}</td>
                <td>
                <Link to={'/form/' + x._id}><button className="btn btn-success me-2" onClick={() => editData(x._id)}>EDIT</button></Link>
                 <button className="btn btn-danger me-2" onClick={() => deleteData(x._id)}>DELETE</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Fragment>
  )
}

export default Sidebar(TableComponent)
