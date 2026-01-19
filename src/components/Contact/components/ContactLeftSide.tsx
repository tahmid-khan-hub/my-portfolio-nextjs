import { motion } from "framer-motion";
import { contactLinks } from "@/constants/contactLinks";
import { contactInfo } from "@/constants/contactInfo";
import AnimateOnView from "@/hooks/AnimateOnView";

const ContactLeftSide = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-7">Contact Information</h2>
      <p className="text-gray-300 mb-6 ">
        Feel free to reach out to me via email, phone or through the form. I’m
        always open to discussing projects or opportunities.
      </p>

      {/* contact information */}
      <div className="space-y-4 mb-8">
        {contactInfo.map(({id, icon: Icon, heading, info}) => (
          <div key={id} className="flex items-center gap-3">
            <AnimateOnView key={id} direction="left" delay={id * 0.08}><motion.div whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.7)", }}
            transition={{ duration: 0 }} 
            className="p-2 rounded-full bg-gray-800">
              <Icon className="text-blue-400 hover:text-blue-300 text-xl" />
            </motion.div></AnimateOnView>
            <div className="ml-2">
              <h5 className="text-lg font-semibold">{heading}</h5>
              <p className="text-sm text-gray-400 font-semibold">{info}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-3">Follow Me</h3>
      <div className="flex gap-5 text-2xl text-white mb-3">
        {contactLinks.map(({id, href, icon: Icon}) => (
          <AnimateOnView key={id} direction="up" delay={id * 0.08}><motion.div key={id}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.7)", }}
          transition={{ duration: 0 }}
          className="p-2 rounded-full bg-gray-800">
            <a
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <Icon className="transition-colors" />
          </a>
          </motion.div></AnimateOnView>
        ))}
      </div>
    </div>
  );
};

export default ContactLeftSide;
