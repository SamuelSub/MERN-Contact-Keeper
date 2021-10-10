import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {

  const { id, name, email, phone, type } = contact;

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left grid-2">
        {name}{' '} <span className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>{type[0].toUpperCase() + type.slice(1)}</span>
      </h3>
      <ul>
        {email && (<li>
          {email}
        </li>)}
        {phone && (<li>
          {phone}
        </li>)}
      </ul>
      <p>
        <button className='btn btn-dark btn-sm'>Edit</button>
        <button className='btn btn-danger btn-sm'>Delete</button>
      </p>
    </div>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactItem
