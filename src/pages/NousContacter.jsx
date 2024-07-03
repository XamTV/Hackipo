function NousContacter() {
  return (
    <div>
      <h1>Nous Contacter</h1>
      <form>
        <div>
          <label htmlFor="name">Nom :</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="textarea">Message :</label>
          <textarea name="message" />
        </div>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default NousContacter;
