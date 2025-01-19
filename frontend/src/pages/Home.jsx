import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import '../index.css';

const Home = () => {
  const fadeIn = {  
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const services = [
    {
      title: "3D Medical Models",
      description: "AI-powered 3D anatomical models for immersive learning experiences",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "AR Visualization",
      description: "Interactive AR technology for real-time medical visualization",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "AI Learning Assistant",
      description: "Personalized AI guidance for medical education",
      image: "https://imgs.search.brave.com/BeQlsTEAk8ZLFtHkomusbqU6TjxAfyasi5Gz7WpCQT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tbHly/dHk2bXI3OW0uaS5v/cHRpbW9sZS5jb20v/Y2I6RGJWXy4zNDE5/My93OjEwMjQvaDo3/MjcvcTo5MC9mOmJl/c3QvaHR0cHM6Ly9u/ZW90ZXJpYy5ldS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8w/Ny91bmRyYXdfcmVh/ZGluZ18wcmUxLTEw/MjR4NzI3LTEtMTAy/NHg3MjcucG5n"
    }
  ];

  

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                VitaVision
              </span>
            </Link>
            <div className="flex items-center space-x-12">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                Services
              </Link>
              <Link to="/gen" className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium hover:shadow-lg transition-all">
                Try Generator
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div 
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="relative overflow-hidden py-20 sm:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8">
              <span className="block">Revolutionary Medical</span>
              <span className="block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Learning Through AR
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Transform medical education with our AI-powered 3D models. Experience immersive learning that breaks down complex medical concepts through augmented reality.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/gen" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium text-lg hover:shadow-xl transition-all">
                Start Learning Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              Explore the innovative services we offer to enhance medical education.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={service.image} alt={service.title} className="w-full h-56 object-cover"/>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Section */}
     

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © 2025 ctrl+c : VitaVision. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;