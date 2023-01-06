import Card from './component/Card';
import './App.css';
import contacts from './contacts';
function App() {

  function createCard(contact) {
    return (
      <Card
        key={contact.id}
        name={contact.name}
        img={contact.imgURL}
        // email={contact.email}
      />
    );
  }

  return (
    <>
      <h1 className="heading"></h1>
      <div className='whole'>
      {contacts.map(createCard)}
      </div>
    </>
  );
}



export default App;
