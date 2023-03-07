import React from "react";
import Bar from "../components/Bar";
import {languages, tools} from '../data'

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
            Computers science and Information
            </h5>
            <p className="font-semibold">Higher Institute OF Computer | 2016 - 2020</p>
            <p className="my-3">
            I graduated with a bachelor degree of Computer science and information
            </p>
          </div>
        </div>
        <div>          
          <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Frontend Developer.</h5>
            <p className="font-semibold"> Ebda  company.</p>
                <li className="text-center">Designing WebApp and Dealing with responsive and
                  Api ,working with Front End and Back End team</li>
                  <li className="text-center">Built relationships with clients by covering every thing
                    client need in his website from scratch </li>
           
          </div>
        </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;