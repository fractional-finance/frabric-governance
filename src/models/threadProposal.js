/**
 * Thread Proposal model.
 * @property {string} id ID of the proposal 
 * @property {Frabric[]} frabric Frabric
 * @property {bytes} governor
 * @property {string} name
 * @property {string} symbol
 * @property {bytes} descriptor
 * @property {bytes} data
 * @property {BaseProposal[]} baseProposal
 */

class ThreadProposal {
    constructor(
        id,
        frabric,
        governor,
        name,
        symbol,
        descriptor,
        data,
        baseProposal
    ) {
        this.id = id
        this.frabric = frabric
        this.governor = governor
        this.name = name
        this.symbol = symbol
        this.descriptor = descriptor
        this.data = data
        this.baseProposal = baseProposal
    }
}
  
  
  export default ThreadProposal