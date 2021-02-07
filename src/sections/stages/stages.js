import React, { useState } from 'react';
import TeamSection from '../team'

const StagesSection = () => {
    
    return (
        <section className="stages-of container">
            <h2 className="stages-of__title">Этапы проведения</h2>
            <p className="stages-of__description">
                The path to every Major begins with the open qualifiers for the regional Minor Championships, spanning
                Europe,
    CIS, Americas, and Asia. <a href>Here is</a> the schedule of every qualifying stage of StarLadder Major.
  </p>
            <TeamSection />
        </section>

    )
}

export default StagesSection;