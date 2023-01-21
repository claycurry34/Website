import React, { Fragment } from 'react';
import '../styles/style.css';
import '../styles/research.css'
import '../styles/component.css'

var Latex = require('react-latex');


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

/*

const databook="http://databookuw.com"
const pde="https://arxiv.org/abs/2209.04934"
const brunton="https://www.youtube.com/watch?v=7n7xaviepKM"
const geoff="https://twitter.com/geoffreyhinton/status/1469842971721965568?s=20&t=6n-544KdFG1aKZRuWgN-lQ"
const object_representation="https://yilundu.github.io/ndf/"
const gcnn = "https://proceedings.mlr.press/v48/cohenc16.html"
<h3>My Interests (longer version)</h3>
const e3 = `$E(3) = SO(3) \\ltimes \\mathbb{R}^3$`
  
<p>At a high level, geometric deep learning gives a mathematical framework to study the most successful neural network architectures, by considering each architecture from the view of its symmetries. 
        For instance, convolutional neural networks can be thought of as universally-approximating translation equivariant maps, RNNs learn time-shift equivariant maps, transformers have permutation 
        equivariance, and graph neural networks can be made to model <Latex>{e3}</Latex> equivariant systems. Much like the physical sciences, symmetry is a general principle from which future architectures may be constructed. 
        On the  other hand, Physics-Informed Machine Learning involves using prior knowledge (e.g. governing equations, constraints, symmetries) and observations (e.g. measured, simulated) to better model dynamical 
        systems and generate novel solutions to difficult control problems.
      </p>
      <p>
        Some of my favorite papers in this area include learning <a href={object_representation}>equivariant representations of objects</a> for robot-object manipulation 
        (<a href={geoff}>Hinton approved</a>), leveraging Clifford algebras to <a href={pde}>improve models of certain difficult initial value problems</a>, and learning to predict 
        the discrepancies of first-principle models of partially observable dynamical system <a href={brunton}>for data-driven optimal control</a>.
      </p>  

<p>
  I developed my interest in <a href={gdl}>Geometric Deep Learning</a> in the semester following my first encounter with group theory (the mathematical
  study of symmetry), through an assigned technical report on Cohen & Welling's, <i><a href={gcnn}>Group Equivariant Convolutional
  Networks</a></i>. Since their publication, a number of follow-on works have pushed the deep learning community closer to the goal 
  of general (universally approximating) equivariant models capable of respecting arbitrary symmetries (e.g. <i>SO(3)</i>, <i>SE(3)</i>, 
  <i>E(n)</i>, and other Lie groups) of arbitrary data (multi-vector valued graphs) living in almost-arbitrary manifolds (e.g. vector 
  space of R^n, the n-dimensional sphere) called homogenous spaces. Equivariant networks which operate on data projected onto a harmonic 
  basis with symmetries of the data expressed in their irreducible representations are, in recent literature, called "Steerable Neural 
  Networks". 
  </p>
  <br />
*/

export default Research;