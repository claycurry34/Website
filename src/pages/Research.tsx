import React, { Fragment } from 'react';
import '../styles/style.css';
import '../styles/research.css'
import '../styles/component.css'

import { Footer, MoreComing, NavBar, PageContent } from '../components';

function Research() {
  return (<>
    <NavBar/>
    <PageContent>
      <Statement />
      <PreviousWork />
      <Keywords />
      <MoreComing />
    </PageContent>
    <Footer />
    </>);
}

  
function Statement() {
  const symmetry="https://www.pnas.org/doi/10.1073/pnas.93.25.14256"
  const gdl="https://geometricdeeplearning.com/"
  return (<Fragment>
    <h2>Research Statement</h2>

      <p>
        My goal is to contribute intuition, applications, and mathematical theorems that instill rigor 
        and tools for systematically deriving gradient-based learning algorithms (i.e., neural networks) 
        under a small set of unifying postulates. I am particularly interested in the role 
        of <a href={symmetry}>symmetry</a> in deriving physically-motivated, data-efficient machine 
        learning algorithms from first principles. 
      </p>
      <p>Toward this goal of unification, I have recently taken an interest in the vantange of gradient-based 
        learning offered under the designation, "<a href={gdl}>Geometric Deep Learning,</a>" (GDL). The 
        approach healded under GDL posits that the fundamental symmetries of the objective function provide 
        a suitable set of inductive biases characterizing the most common and successful neural architectures. 
        For instance, the class of functions generated by convolutional neural networks can be thought of as 
        universally-approximating maps with translational symmetry, RNNs can be thought of as universally-approximating 
        transformations with time-shift symmetry, transformers can be thought of as universally-approximating 
        functions with permutation symmetry, and graph neural networks can be thought of as universally approximating 
        correspondences with E(3) (Euclidean group) symmetry. For instance, my recent work was motivated to push the 
        limit of understanding and applications of symmetry-aware machine learning algorithms by developing a novel 
        application for the defense and aerospace industry (i.e., autonomous flight maneuver identification). Like in 
        physics, symmetry is a fundamental principle from which future, previously unseenneural architectures may be 
        constructed, presenting a solid avenue for its role in a general unified theory of neural networks. 
      </p>
      <hr />

  </Fragment>);
}

function PreviousWork(){
  
  return(<Fragment>
    <h3>Previous Work</h3>
    <p>
      As an undergraduate research assistant, I contributed to the development of machine learning algorithms
      for enhanced airspace monitoring / multiple object tracking software. My specific contributions included 
      designing and implementing numerous scientific plots and animations, developing data scraping tools (which 
      successfully scraped &gt; 70,000,000 transponder messages in one weekend), and combing over ideas in the machine
      learning literature to synthesize novel learning algorithms for identifying qualitative flight maneuvers. 
    </p>
    <hr />
    </Fragment>);
}

function Keywords() {
  return(<Fragment>
      <h3>Key Words</h3>
      <div className='keywords'>
      <div>Geometric Deep Learning</div>
      <div>Geometry</div>
      <div>Symmetry</div>
      <div>Algebra</div>
      <div>Multiple Object Tracking</div>
      <div>Physics Informed ML</div>
      <div>Data Efficient ML</div>
      <div>Dynamical Systems and Optimal Control</div>
      </div>
      
  </Fragment>)
}

export default Research;