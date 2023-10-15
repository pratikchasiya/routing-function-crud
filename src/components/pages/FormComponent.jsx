import React, { Fragment, useEffect, useState } from 'react'
import { Button, Col, FormGroup, Input, Label, Row, Form } from 'reactstrap'
import Sidebar from '../Sidebar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const FormComponent = () => {
  const [array, setarray] = useState([]);
  let [obj, setobj] = useState({ hobbies: [], firstName: '', lastName: '', gender: '', city: '', age: '' });
  const [blankObj, setblankObj] = useState({});
  let navigate = useNavigate()
  let newId = useParams()

  useEffect(() => {
    editData(newId.newId)
  }, [newId])

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


  const getData = (e) => {
    if (e.target.name == "hobbies") {
      if (e.target.checked) {
        obj.hobbies.push(e.target.value);
      } else {
        obj.hobbies = obj.hobbies.filter((x) => x != e.target.value);

      }
      blankObj.hobbies = [];
    }

    else {
      obj[e.target.name] = e.target.value;

      blankObj[e.target.name] = "";
    }
    setobj({ ...obj });
    setblankObj({ ...blankObj });
  };

  const save = () => {
    if (obj._id == undefined) {
      axios.post('https://student-api.mycodelibraries.com/api/student/add', obj).then((res) => {
        console.log(res)
        getApiData()
      }).catch((err) => {
        console.log(err)
      })
    } else {
      obj.id = obj._id;
      // console.log(obj.id)
      axios.post('https://student-api.mycodelibraries.com/api/student/update', obj
      ).then((res) => {
        console.log(res)
        getApiData()
      }).catch((err) => {
        console.log(err)
      })
    }
    setobj({ ...blankObj });
    navigate('/table')
  };

  const editData = (id) => {
    axios.get('https://student-api.mycodelibraries.com/api/student/get-student-by-id?id=' + id).then((res) => {
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
      <div className='text-center mt-4 mb-2 fw-bold fs-5'>Form Component</div>

      <Form className='container form shadow-sm'>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName" className='fw-bold'>
                First Name :
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Enter First Name"
                type="text"
                value={obj.firstName || ''}
                onChange={getData}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName" className='fw-bold'>
                Last Name :
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Enter Last Name"
                type="text"
                value={obj.lastName || ''}
                onChange={getData}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="age" className='fw-bold'>
                Age :
              </Label>
              <Input
                id="age"
                name="age"
                placeholder="Enter Age"
                type="number"
                value={obj.age || ''}
                onChange={getData}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="city" className='fw-bold'>
                City :
              </Label>
              <select name="city" id="" className='from-group d-block w-100 form-select' onChange={getData}>
                <option value="Surat">Surat</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Ahmedabad">Ahmedabad</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="" className='me-2 fw-bold'>
                Gender :
              </Label>
              <Input
                id=""
                name="gender"
                value="Male"
                type='radio'
                className='form-group me-2'
                checked={obj.gender === 'Male'}
                onChange={getData}
              />Male
              <Input
                id=""
                name="gender"
                value="Female"
                type='radio'
                className='me-2 ms-2'
                checked={obj.gender === 'Female'}
                onChange={getData}
              />Female
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="" className='me-2 fw-bold'>
                Hobbies :
              </Label>
              <Input
                id=""
                name="hobbies"
                value="Cricket"
                type='checkbox'
                className='form-group me-2'
                checked={obj.hobbies?.includes('Cricket')}
                onChange={getData}
              />Cricket
              <Input
                id=""
                name="hobbies"
                value="Football"
                type='checkbox'
                className='form-group me-2 ms-2'
                checked={obj.hobbies?.includes('Football')}
                onChange={getData}
              />Football
              <Input
                id=""
                name="hobbies"
                value="Music"
                type='checkbox'
                className='form-group me-2 ms-2'
                checked={obj.hobbies?.includes('Music')}
                onChange={getData}
              />Music
              <Input
                id=""
                name="hobbies"
                value="Travelling"
                type='checkbox'
                className='form-group me-2 ms-2'
                checked={obj.hobbies?.includes('Travelling')}
                onChange={getData}
              />Travelling
            </FormGroup>
          </Col>
        </Row>

        <Button onClick={save}>
          Save
        </Button>
      </Form>

    </Fragment>

  )
}

export default Sidebar(FormComponent)
