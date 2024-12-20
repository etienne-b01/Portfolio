import React from 'react';

function ContactUs ({resumeData}) {
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below:
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>LinkedIn:&nbsp; <a href={resumeData.linkedinId}>{resumeData.linkedinId}</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }

export default ContactUs;