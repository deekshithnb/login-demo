export default function LoginPage() {
  return (
    <div>
      <h2>SIGN IN</h2>
      <form className="modal-content animate">
        <div className="container">
          <label for="email">
            <b>Username</b>
          </label>
          <input type="text" placeholder="Enter E-mail" name="email" required />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button type="submit">SIGN IN</button>
        </div>
      </form>
    </div>
  );
}
