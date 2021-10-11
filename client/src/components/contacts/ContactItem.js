import PropTypes from 'prop-types';
import { useContext } from 'react';
import contactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {

  const ContactContext = useContext(contactContext);
  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    ContactContext.deleteContact(id);
    ContactContext.clearCurrent();
  }

  const onSetCurrent = () => {
    ContactContext.setCurrent(contact);
  }

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
        <button onClick={onSetCurrent} className='btn btn-dark btn-sm'>Edit</button>
        <button onClick={onDelete} className='btn btn-danger btn-sm'>Delete</button>
      </p>
    </div>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactItem
