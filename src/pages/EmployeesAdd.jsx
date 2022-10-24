import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const EmployeesAdd = () => {
    const navigate = useNavigate();

    const url = 'http://localhost:1003/products';
    const [data, setData] = useState({
        name: "",
        mail: "",
        tel: "",
        leadSource: "",

    })
    function submit(e) {
        e.preventDefault();

        axios.post(url, {
            name: data.name,
            tel: data.tel,
            mail: data.mail,
            leadSource: data.leadSource,

        }).then(res => {


            toast.success("Succesful");
            navigate("/employees")
        }).catch(() => {
            toast.error("Error");
        })
    }

    function handle(e) {

        const newData = { ...data }
        newData[e.target.id] = e.target.value;
        setData(newData);
    }
    return (
        <div>

            <div>
                <div className="container-fluid">
                    <div className="row flex-nowrap">
                        <div className="col py-3">
                            <div class="w-full max-w-xs">
                                <form enctype="multipart/form-data" method="post" onSubmit={(e) => submit(e)} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                    <div class="mb-4">
                                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                            Name
                                        </label>
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " onChange={(e) => handle(e)} value={data.value} required type="name" className="form-control" id="name" />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                            Mail
                                        </label>
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " onChange={(e) => handle(e)} value={data.value} required type="name" className="form-control" id="mail" />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                            Tel Number
                                        </label>
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " onChange={(e) => handle(e)} value={data.value} required type="name" className="form-control" id="tel" />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                            Lead Source
                                        </label>
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " onChange={(e) => handle(e)} value={data.value} required type="name" className="form-control" id="leadSource" />
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded leading-tight focus:outline-none focus:shadow-outline " type="submit">
                                            Create
                                        </button>
                                    </div>
                                </form>

                            </div>




                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default EmployeesAdd