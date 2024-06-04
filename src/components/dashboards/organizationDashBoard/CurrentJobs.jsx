import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ReactPaginate from 'react-paginate';
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import axiosInstance from "../../../services/api/axiosInstance";
import { FaLaptopCode } from "react-icons/fa6";
import Select from 'react-select';
import { HiDotsHorizontal } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { RiDeleteBinFill } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function CurrentJobs() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchList, setSearchList] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [activeJobId, setActiveJobId] = useState(null);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      padding: '4px',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0 4px',
    }),
  };

  const itemsPerPage = 3;

  const customStylesModel = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "#ADD8E6",
    },
  };

  useEffect(() => {
    // Simulating initial data fetch
    setJobs([
      { id: 1, title: 'Software Engineer', level: 'Mid', status: 'Open', applicants: 20, interviews: 5 },
      { id: 2, title: 'Data Analyst', level: 'Junior', status: 'Closed', applicants: 15, interviews: 3 },
      { id: 3, title: 'Software Engineer 1', level: 'Mid', status: 'Open', applicants: 20, interviews: 5 },
      { id: 4, title: 'Data Analyst 1', level: 'Junior', status: 'Closed', applicants: 15, interviews: 3 },
      { id: 5, title: 'Software Engineer 2', level: 'Mid', status: 'Open', applicants: 20, interviews: 5 },
      { id: 6, title: 'Data Analyst 2', level: 'Junior', status: 'Closed', applicants: 15, interviews: 3 },
    ]);
  }, []);

  const handleDelete = () => {
    deleteJobManually(selectedJob.id);
  };

  const deleteJobManually = (jobId) => {
    setJobs(jobs.filter((job) => job.id !== jobId));
    closeDeleteModal();
  };

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    openDetailModal();
  };

  const handleDeleteClick = (job) => {
    setSelectedJob(job);
    openDeleteModal();
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const currentItems = jobs.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  useEffect(() => {
    const fetchSearch = async (searchTerm) => {
      if (searchTerm) {
        try {
          console.log("Query:", searchTerm); // Log the query before making the GET request
          const response = await axiosInstance.get(
            `/categories/search?term=${searchTerm}`
          );
          setSearchList(response.data.data); // Update the searchList with the fetched data
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      }
    };

    // Call fetchSearch initially if you want to fetch all categories on component mount
    fetchSearch(query);
  }, [query]);

  const handleOnSearch = (string, results) => {
    setQuery(string); // Set the query state with the searched string
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span
          style={{ display: "block", textAlign: "left", cursor: "pointer" }}
        >
          {item.name}
        </span>
      </>
    );
  };

  const toggleButtons = (jobId) => {
    setActiveJobId(prevJobId => (prevJobId === jobId ? null : jobId));
  };

  const openDetailModal = () => setIsDetailModalOpen(true);
  const closeDetailModal = () => setIsDetailModalOpen(false);
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  return (
    <div>
      <div className="rounded-md border border-solid  px-5  my-5 py-10 border-black border-opacity-10">
        <div className=" flex flex-col lg:flex-row justify-between ">
          <div className="flex flex-row items-center max-lg:my-5 space-x-4">
            <FaLaptopCode size={30} color="5E676B" />
            <span className="text-sm font-spline font-semibold">
              Current Job Opening
            </span>
            <IoMdAddCircle size={40} color="01AFF4" className='cursor-pointer' onClick={() => navigate("createjobs")} />
          </div>
          <div className="flex flex-col justify-center md:flex-row">
            <div className="md:mb-0 md:px-5 md:w-[350px] max-md:w-full">
              <ReactSearchAutocomplete
                items={searchList}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
                styling={{ border: "1.5px solid #C0C0C0", borderRadius: "5px" }}
              />
            </div>
            <div className="flex justify-end my-5 md:my-0">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                placeholder="Filters"
                options={options}
                className="w-60 "
                styles={customStyles}
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl mb-4">Job Listings</h1>

          <Modal isOpen={isDetailModalOpen} onRequestClose={closeDetailModal} style={customStylesModel}>
            {selectedJob && (
              <div>
                <h2>Job Details</h2>
                <p>Title: {selectedJob.title}</p>
                <p>Level: {selectedJob.level}</p>
                <p>Status: {selectedJob.status}</p>
                <p>Applicants: {selectedJob.applicants}</p>
                <p>Interviews: {selectedJob.interviews}</p>
                <button onClick={closeDetailModal} className="bg-gray-500 text-white p-2 rounded">
                  Close
                </button>
              </div>
            )}
          </Modal>

          <Modal isOpen={isDeleteModalOpen} onRequestClose={closeDeleteModal} style={customStylesModel}>
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this job?</p>
            <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">
              Delete
            </button>
            <button onClick={closeDeleteModal} className="bg-gray-500 text-white p-2 rounded">
              Cancel
            </button>
          </Modal>

          <div>
            {currentItems.map((job) => (
              <div key={job.id} className="flex gap-5 justify-between w-full max-md:flex-wrap mb-4 border p-4 rounded">
                <div className="flex gap-3">
                  <div className="flex flex-col px-5 my-auto">
                    <div className="text-lg leading-6 text-slate-800">{job.title}</div>
                    <div className="mt-1.5 text-sm font-light leading-5 text-neutral-500">
                      {job.level}
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between items-start px-5 my-auto">
                  <div className="flex flex-col whitespace-nowrap">
                    <div className="text-sm font-light leading-5 text-neutral-500">Status</div>
                    <div className="mt-2.5 text-lg leading-6 text-red-500">{job.status}</div>
                  </div>
                  <div className="flex flex-col self-stretch">
                    <div className="text-sm font-light leading-5 text-neutral-500">Applicant</div>
                    <div className="mt-2 text-lg leading-6 text-slate-800">{job.applicants}</div>
                  </div>
                  <div className="flex flex-col whitespace-nowrap">
                    <div className="text-sm font-light leading-5 text-neutral-500">Interview</div>
                    <div className="mt-3 text-lg leading-6 text-slate-800">{job.interviews}</div>
                  </div>
                  <div>
                    {activeJobId === job.id ?
                      <div className="flex flex-row gap-3 justify-center">
                        <FaEdit size={40} className="p-2 rounded"  onClick={() => {navigate("editjobs",{state:{jobId:job.id}}), toggleButtons(job.id) }}  />
                        <FaEye size={40} onClick={() => { handleViewDetails(job), toggleButtons(job.id) }} className="p-2 rounded" />
                        <RiDeleteBinFill size={40} onClick={() => { handleDeleteClick(job), toggleButtons(job.id) }} className="p-2 rounded" />
                      </div> : <div>
                        <HiDotsHorizontal size={30} onClick={() => toggleButtons(job.id)} />
                      </div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            containerClassName="flex flex-row pagination justify-center items-center"
            activeClassName="bg-[#01AFF4] text-neutral-50 py-2  border rounded-md"
            pageRangeDisplayed={5}
            pageCount={Math.ceil(jobs.length / itemsPerPage)}
            marginPagesDisplayed={2}
            previousLabel="<"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageClassName="page-item"
            pageLinkClassName="page-link"
          />
        </div>
      </div>
    </div>
  );
}

export default CurrentJobs;
