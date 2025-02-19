import React from 'react'

const Register = () => {
        const [values, setValues] = useState({
          name: '',
          email: '',
          password: ''
        });
      
        const [errors, setErrors] = useState({});
        const [serverErrors, setServerErrors] = useState([]);
        const navigate = useNavigate()
      
        const handleInput = (event) => {
          setValues({ ...values, [event.target.name]: event.target.value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          const errs = Validation(values);
          setErrors(errs);
        
          // Ensure no validation errors before making the API request
          if (Object.keys(errs).length === 0) {
            axios.post('http://127.0.0.1:3000/contactmanager/register', values, {
              headers: { "Content-Type": "application/json" } // Added this line
            })
            .then((res) => {
              if (res.data.success) {
                toast.success("Account Created Successfully", {
                  position: "top-right",
                  autoClose: 3000
                });
        
                setTimeout(() => {
                  navigate('/login');
                }, 3500);
              }
            })
            .catch((err) => {
              console.error("Server Error:", err.response?.data);
              if (err.response && err.response.data.errors) {
                setServerErrors(err.response.data.errors);
              }
            });
          }
        };
        
        
    return (
        <div className='form-container'>
          <form className="form" onSubmit={handleSubmit}> {/* ✅ Added onSubmit here */}
            <h2>Create Account</h2>
    
            <div className="form-group">
              <label htmlFor="name" className='form-label'>Name:</label>
              <input type="text" placeholder='Enter Name' className='form-control' name='name' onChange={handleInput} />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
    
            <div className="form-group">
              <label htmlFor="email" className='form-label'>Email:</label>
              <input type="email" placeholder='Enter Email' className='form-control' name='email' autoComplete='off' onChange={handleInput} />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
    
            <div className="form-group">
              <label htmlFor="password" className='form-label'>Password:</label>
              <input type="password" placeholder='********' className='form-control' name="password" onChange={handleInput} />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
    
            <button className="form-btn">Register</button>
            <p>Already Registered? <Link to='/login'>Login</Link></p>
          </form>
        </div>
      );
    };
    
    

export default Register
