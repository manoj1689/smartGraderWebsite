import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ReactPaginate from 'react-paginate';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [formState, setFormState] = useState({
    id: null,
    title: '',
    level: '',
    status: '',
    applicants: '',
    interviews: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor:"#ADD8E6"

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

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateJobManually(formState);
    } else {
      addJobManually(formState);
    }
    resetForm();
  };

  const addJobManually = (jobData) => {
    const newJob = { id: Date.now(), ...jobData };
    setJobs([...jobs, newJob]);
    closeModal();
  };

  const updateJobManually = (updatedJobData) => {
    setJobs(jobs.map((job) => (job.id === updatedJobData.id ? updatedJobData : job)));
    closeModal();
  };

  const handleEdit = (job) => {
    setFormState(job);
    setIsEditing(true);
    openModal();
  };

  const handleDelete = () => {
    deleteJobManually(selectedJob.id);
  };

  const deleteJobManually = (jobId) => {
    setJobs(jobs.filter((job) => job.id !== jobId));
    closeDeleteModal();
  };

  const resetForm = () => {
    setFormState({
      id: null,
      title: '',
      level: '',
      status: '',
      applicants: '',
      interviews: '',
    });
    setIsEditing(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openDetailModal = () => setIsDetailModalOpen(true);
  const closeDetailModal = () => setIsDetailModalOpen(false);
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Job Listings</h1>
      <button onClick={openModal} className="mb-4 bg-blue-500 text-white p-2 rounded">
        Add Job
      </button>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles} >
        <h2>{isEditing ? 'Edit Job' : 'Add Job'}</h2>
        <form onSubmit={handleSubmit} className=' flex flex-col lg:flex-row gap-3'>
          <input
            name="title"
            value={formState.title}
            onChange={handleChange}
            placeholder="Job Title"
            className="border p-2"
            required
          />
          <input
            name="level"
            value={formState.level}
            onChange={handleChange}
            placeholder="Level"
            className="border p-2"
            required
          />
          <input
            name="status"
            value={formState.status}
            onChange={handleChange}
            placeholder="Status"
            className="border p-2"
            required
          />
          <input
            name="applicants"
            type="number"
            value={formState.applicants}
            onChange={handleChange}
            placeholder="Applicants"
            className="border p-2"
            required
          />
          <input
            name="interviews"
            type="number"
            value={formState.interviews}
            onChange={handleChange}
            placeholder="Interviews"
            className="border p-2"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            {isEditing ? 'Update' : 'Add'}
          </button>
          <button type="button" onClick={closeModal} className="bg-gray-500 text-white p-2 rounded">
            Cancel
          </button>
        </form>
      </Modal>

      <Modal isOpen={isDetailModalOpen} onRequestClose={closeDetailModal} style={customStyles}>
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

      <Modal isOpen={isDeleteModalOpen} onRequestClose={closeDeleteModal} style={customStyles}>
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
              <div className="flex flex-row gap-3 justify-center">
                <button onClick={() => handleViewDetails(job)} className="bg-blue-500 text-white p-2 rounded ">
                  More
                </button>
                <button onClick={() => handleEdit(job)} className="bg-yellow-500 text-white p-2 rounded ">
                  Edit
                </button>
                <button onClick={() => handleDeleteClick(job)} className="bg-red-500 text-white p-2 rounded">
                  Del
                </button>
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
  );
};

export default JobListings;
