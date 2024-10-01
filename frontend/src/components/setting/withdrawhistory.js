import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  const navigate = useNavigate();
  const [payment, setPayment] = useState([]);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [noData, setNoData] = useState(false);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchPayment();
  }, [page, search, filter]);

    const fetchuserName = async (id) => {
        const userRes = await fetch(`http://localhost:8000/api/getSingleuser`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ id }),
        });
        const userData = await userRes.json();

        const type = userData.success ? userData.result.username : "Unknown";

        return type;
    };

  const fetchPayment = async () => {
    try {
      setLoader(true);
      const res = await fetch(
        `http://localhost:8000/api/getpayment?page=${page}&limit=${pageSize}&search=${search}&filter=${filter}&transactionType=withdraw`
      );
      const response = await res.json();
      if (response.success) {

        const paymentWithuser = await Promise.all(
            response.result.map(async (users) => {
              const username = await fetchuserName(users.user_id);
              return {
                ...users,
                username,
              };
            })
          );
          setPayment(paymentWithuser);
        setNoData(response.result.length === 0);
        // setPayment(response.result);
        setCount(response.count);
      }
      setLoader(false);
    } catch (error) {
      console.error("Error fetching payments:", error);
      setLoader(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "search") {
      setSearch(value);
      setPage(1);
    } else if (name === "filter") {
      setFilter(value);
      setPage(1);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    let status = newStatus === 1 ? "Inactive" : "Activate";
    const permissionOfDelete = window.confirm(
      `Are you sure you want to ${status} the Project?`
    );
    if (permissionOfDelete) {
      let projectOne = payment.length === 1;
      if (count === 1) {
        projectOne = false;
      }
      try {
        const res = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/updatestatus/Project/${id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: newStatus }),
          }
        );
        const response = await res.json();
        if (response.success) {
          toast.success(`Project is ${status} Successfully!`, {
            position: "top-right",
            autoClose: 1000,
          });
          if (projectOne) {
            setPage((prevPage) => Math.max(prevPage - 1, 1));
          } else {
            fetchPayment();
          }
        }
      } catch (error) {
        console.error("Error updating status:", error);
        alert("Error updating status");
      }
    }
  };

  const startIndex = (page - 1) * pageSize;

  return (
    <div className="relative">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex items-center">
        <div className="text-2xl font-bold mx-2 my-8 px-4">WithDraw </div>
      </div>
      <div className="flex justify-between">
        <NavLink to="/payment/addproject">
          <button className="bg-blue-800 text-white p-3 m-5 text-sm rounded-lg">
            Add New
          </button>
        </NavLink>
        <input
          placeholder="Search "
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
          className="text-black border-[1px] rounded-lg bg-white p-2 m-5"
        />
        <select
          name="filter"
          value={filter}
          onChange={handleChange}
          className="text-black border-[1px] rounded-lg bg-white p-2 m-5"
        >
          <option value="">Select Filter</option>
          <option value="recent">Recent</option>
          <option value="oldest">Oldest</option>
          <option value="running">Running</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      {loader && (
        <div className="absolute h-full w-full flex justify-center items-center">
          <div
            className="flex justify-center h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent text-surface dark:text-white"
            role="status"
          >
            <span className="absolute m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0">
              Loading...
            </span>
          </div>
        </div>
      )}

      <div className="relative overflow-x-auto m-5 mb-0">
        {payment.length > 0 && (
          <table className="w-full text-sm text-left border-2 border-gray-300">
            <thead className="text-xs uppercase bg-gray-200">
              <tr>
                <th className="px-6 py-3 border-2">Sr no.</th>
                <th className="px-6 py-3 border-2">User Name</th>                
                <th className="px-6 py-3 border-2">Payment Type</th>
                <th className="px-6 py-3 border-2">Amount</th>
                <th className="px-6 py-3 border-2">status</th>
                <th className="px-6 py-3 border-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {payment.map((item, index) => (
                <tr key={item._id} className="bg-white border-b">
                  <th className="px-6 py-4 font-medium border-2">
                    {startIndex + index + 1}
                  </th>
                  <td className="px-6 py-4 font-medium border-2">{item?.username}</td>
                  <td className="px-6 py-4 font-medium border-2">{item?.paymentType}</td>                 
                  <td className="px-6 py-4 font-medium border-2">{item?.amount}</td>                 
                  
                  <td className="px-6 py-4 font-medium border-2">
                    {item?.status === 'pending' ? (
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleStatusChange(item._id, 0)}
                      >
                        Activate
                      </button>
                    ) : (
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleStatusChange(item._id, 1)}
                      >
                        Inactive
                      </button>
                    )}
                    &ensp;
                  </td>
                  <td className="px-6 py-4 font-medium border-2">
                    <div className="flex justify-between">
                     
                      <IoMdEye
                        className="text-xl text-blue-500 hover:scale-110 cursor-pointer"
                        onClick={() => navigate(`/viewproject/${item._id}`)}
                      />
                      <CiEdit
                        className="text-xl text-blue-500 hover:scale-110 cursor-pointer"
                        onClick={() => navigate(`/payment/${item._id}`)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {noData && (
          <div className="text-center text-2xl font-semibold text-gray-500 p-10">
            No Data Found in WithDraw History
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={`bg-blue-800 text-white p-2 m-5 text-sm rounded-lg ${
            page === 1 ? "opacity-50" : ""
          }`}
        >
          Previous
        </button>
        <button
          onClick={() =>
            setPage((prev) => (payment.length === 0 ? prev : prev + 1))
          }
          disabled={payment.length === 0}
          className={`bg-blue-800 text-white p-2 m-5 text-sm rounded-lg ${
            payment.length === 0 ? "opacity-50" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Payment;
