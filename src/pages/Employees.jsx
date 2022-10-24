import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Table.css'

const Employees = (props) => {

  const [query, setQuery] = useState("")
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')

      .then(res => {
        setData(res.data)
      }).catch(err => console.log(err))
  }, [])


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
            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Light
            </button>

          </td>
          <td class="py-4 px-6">
            $2999
          </td>
          <td class="py-4 px-6 text-right">
            <a href="#" class="font-medium text-blue-600 mx-4 dark:text-blue-500 hover:underline">Details</a>
            <button href="#" onClick={(e) => Delete(data.id, e)} class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>

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
                    <div className='flex justify-between'>
                      <h3 className='text-4xl mb-4'>567 Leads</h3>
                      <div className='d-flex mb-4 mt-2'>
                        <button type="button" class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
                          Create Leads
                        </button>
                      </div>
                    </div>
                    <form class="flex items-center">
                      <label for="simple-search" class="sr-only">Search</label>
                      <div class="relative w-full">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" onChange={(event) => setQuery(event.target.value)} id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required="" />
                      </div>

                    </form>

                  </div>


                </div>
                <div style={{ 'overflow-x': 'auto' }}>

                  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="py-3 px-6">
                            Lead name
                          </th>
                          <th scope="col" class="py-3 px-6">
                            Contact
                          </th>
                          <th scope="col" class="py-3 px-6">
                            Lead Source
                          </th>
                          <th scope="col" class="py-3 px-6">
                            Lead Owner
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