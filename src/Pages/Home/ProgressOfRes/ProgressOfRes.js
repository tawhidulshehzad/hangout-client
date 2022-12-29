import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";
import React from "react";

const ProgressOfRes = () => {
  return (
    <div>
      <h2>Progress Of Our Food Quality</h2>
      <div className="p-5">
        <>
          <MDBProgress>
            <MDBProgressBar valuenow={100} valuemin={0} valuemax={100} />
          </MDBProgress>

          <br />

          <MDBProgress>
            <MDBProgressBar width="100" valuemin={0} valuemax={100} />
          </MDBProgress>

          <br />

          <MDBProgress>
            <MDBProgressBar width="50" valuemin={0} valuemax={100} />
          </MDBProgress>

          <br />

          <MDBProgress>
            <MDBProgressBar width="30" valuemin={0} valuemax={100} />
          </MDBProgress>

          <br />

          <MDBProgress>
            <MDBProgressBar width="10" valuemin={0} valuemax={100} />
          </MDBProgress>
        </>
      </div>
    </div>
    
  );
};

export default ProgressOfRes;
