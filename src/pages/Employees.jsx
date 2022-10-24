import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Employees = (props) => {

  const [query, setQuery] = useState("")
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')

      .then(res => {
        setData(res.data)
      }).catch(err => console.log(err))
  }, [])

  function Update(id) {

    props.history.push("/company" + id)
    // navigate("/companyupdate")

  }
  const Delete = (id, e) => {
    const url = `http://localhost:53410/api/Company/delete?id=${id}`

    e.preventDefault();

    axios.post(url)
      .then(res => {
        toast.success("Uğurla silindi")

      }).catch(err => toast.error(err))
  }

  const array = data.filter((value) => {
    if (query === "") {
      return value;
    }
    else if (value.name.toLowerCase().includes(query.toLowerCase())) {
      return value;
    }
    else if (value.telNumber.toLowerCase().includes(query.toLowerCase())) {
      return value;
    }
    else if (value.mail.toLowerCase().includes(query.toLowerCase())) {
      return value;
    }

  }).map((data, index) => {
    return (
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Apple MacBook Pro 17"
          </th>
          <td class="py-4 px-6">
            Sliver
          </td>
          <td class="py-4 px-6">
            Laptop
          </td>
          <td class="py-4 px-6">
            $2999
          </td>
          <td class="py-4 px-6 text-right">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Microsoft Surface Pro
          </th>
          <td class="py-4 px-6">
            White
          </td>
          <td class="py-4 px-6">
            Laptop PC
          </td>
          <td class="py-4 px-6">
            $1999
          </td>
          <td class="py-4 px-6 text-right">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
          </td>
        </tr>
        <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Magic Mouse 2
          </th>
          <td class="py-4 px-6">
            Black
          </td>
          <td class="py-4 px-6">
            Accessories
          </td>
          <td class="py-4 px-6">
            $99
          </td>
          <td class="py-4 px-6 text-right">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
          </td>
        </tr>

      </tbody>
    )
  })


  return (
    <div>
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>

        <div>
          <div className="container-fluid">
            <div className="row flex-nowrap">

              <div className="col py-3">
                <div className='row'>
                  <div className='col-md-9 col-sm-6 col-lg-12 d-flex mb-3 justify-content-between'>
                    <h3>Şirkətlər</h3>
                    <form class="search-box newSearchInputForm" style={{ 'margin-right': "60px" }}>
                      <input onChange={(event) => setQuery(event.target.value)} type="text" placeholder="Axtarış hissəsi" />
                      <button type="reset"></button>
                    </form>
                  </div>

                  <div className='d-flex mb-4 mt-2'>
                    <a href='admin/companyadd' className='btn btn-success position-relative'>Şirkət Əlavə Et</a>
                  </div>
                </div>
                <div style={{ 'overflow-x': 'auto' }}>

                  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="py-3 px-6">
                            Product name
                          </th>
                          <th scope="col" class="py-3 px-6">
                            Color
                          </th>
                          <th scope="col" class="py-3 px-6">
                            Category
                          </th>
                          <th scope="col" class="py-3 px-6">
                            Price
                          </th>
                          <th scope="col" class="py-3 px-6">
                            <span class="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>

                      {array}


                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Employees