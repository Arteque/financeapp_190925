import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../stores/authStore";
import InputText from "../../organisms/Form/InputText";
import ButtonCall from "../../molecules/Buttons/ButtonCall";
import LinkIcon from "../../molecules/Link/LinkIcon";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login, isLoading, error, clearError, user } = useAuthStore();

  const [passwordType, setPasswordType] = useState<string>("password");
  const [passwordVisibilityState, setPasswordVisibilityState] = useState<boolean>(false);
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // Redirect wenn bereits eingeloggt
  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  // Error zurücksetzen wenn Komponente gemountet wird
  useEffect(() => {
    clearError();
  }, [clearError]);

  const passwordTextVisibilityHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPasswordVisibilityState(!passwordVisibilityState);
    setPasswordType(passwordVisibilityState ? "password" : "text");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Error zurücksetzen wenn User tippt
    if (error) {
      clearError();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation
    if (!formData.email || !formData.password) {
      return;
    }

    try {
      await login(formData.email, formData.password);
      
      // Navigation nach erfolgreichem Login
      navigate('/', { replace: true });
      
    } catch (err) {
      // Error wird vom Store gehandelt
      console.error('Login error:', err);
    }
  };

  return (
    <section className="container_32 bg-grey-100 w-fit rounded-2xl">
      <h2 className="heading_xl">Login</h2>
      <p className="mt-4 text_sm text-grey-400">
        Don't have an account?{" "}
        <LinkIcon 
          href="/register" 
          text="Register" 
          iconAfterText={false}
          className="text-green-100 hover:text-green-200 underline"
        />
      </p>
      
      {/* Demo Login Hinweis */}
      <div className="demo-info bg-blue-100 bg-opacity-20 border border-blue-200 text-blue-300 px-4 py-3 rounded mb-4 text_xs">
        <strong>Demo Login:</strong><br />
        Email: demo@financeapp.com<br />
        Password: demo123
      </div>
      
      {error && (
        <div className="error-message bg-red-100 border border-red-200 text-red-100 px-4 py-3 rounded mb-4 text_sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <InputText 
          className="my-6 block" 
          textThenIcon={false} 
          id="email" 
          name="email"
          infoText="" 
          labelText="E-Mail" 
          type="email" 
          required={true} 
          placeholder="youremail@xy.com"
          value={formData.email}
          onChange={handleInputChange}
          disabled={isLoading}
        />
        
        <div className="password mb-5">
          <InputText
            textThenIcon={true}
            id="password"
            name="password"
            infoText=""
            labelText="Password"
            required
            type={passwordType}
            hasIcon
            icon={passwordVisibilityState ? <FaEye /> : <FaEyeSlash />}
            clickHanlder={passwordTextVisibilityHandler}
            value={formData.password}
            onChange={handleInputChange}
            disabled={isLoading}
            placeholder="Enter your password"
          />
        </div>
        
        <ButtonCall 
          type="submit" 
          className={`btn btn_primary btn_primary--dark text_sm--bold w-full ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          text={isLoading ? "Loading..." : "Login"} 
          textThenIcon={false}
          disabled={isLoading || !formData.email || !formData.password}
        />
      </form>
      
      {/* Demo Features Info */}
      <div className="mt-6 text_xs text-grey-400">
        <p>Demo Features verfügbar:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Transaktionen aus {`#types/data.json`}</li>
          <li>Budgets und Kategorien</li>
          <li>Sparziele (Pots)</li>
          <li>Dashboard Übersicht</li>
        </ul>
      </div>
    </section>
  );
};

export default LoginForm;