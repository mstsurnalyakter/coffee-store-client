import PropTypes from 'prop-types'
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee}) => {

  const handleDelete = _id =>{

    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
               Swal.fire({
                 title: "Deleted!",
                 text: "Your Coffee has been deleted.",
                 icon: "success",
               });
            }
          })
          .catch((error) => console.error(error));

        console.log('delete confirmed');
      }
    });

  }

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={coffee?.photoURL} alt="Movie" />
      </figure>
      <div className="card-body flex-row justify-around items-center">
        <div>
          <h2 className="card-title">Name:{coffee?.name}</h2>
          <h2 className="card-title">Taste:{coffee?.taste}</h2>
          <h2 className="card-title">Supplier:{coffee?.supplier}</h2>
          <p>Details:{coffee?.details}</p>
        </div>
        <div className="">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item">View</button>
            <button className="btn join-item">Edit</button>
            <button onClick={()=>handleDelete(coffee?._id)} className="btn join-item">X</button>
          </div>
        </div>
      </div>
    </div>
  );
}

CoffeeCard.propTypes = {
    coffee:PropTypes.object.isRequired
};

export default CoffeeCard
