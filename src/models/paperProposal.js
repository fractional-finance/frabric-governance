/**
 * PaperProposal model.
 * @property {string} id ID of the paper proposal
 * @property {Frabric[]} frabric Frabric related to the paper proposal
 * @property {BaseProposal[]} baseProposal baseProposal of the paper proposal
 */

 class PaperProposal {
    constructor(
      id,
      frabric,
      baseProposal
    ) {
      this.id = id
      this.frabric = frabric
      this.baseProposal = baseProposal
    }
  }
  
  
  export default PaperProposal