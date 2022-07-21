/**
 * BaseProposal model.
 * @property {string} id ID of the paper proposal
 * @property {Thread[]} thread Thread related to the paper proposal
 * @property {Frabric[]} frabric Frabric related to the paper proposal
 * @property {string} creator
 * @property {number} type
 * @property {ProposalState} state
 * @property {Vote[]} vote
 * @property {string} info
 * @property {string} supermajority
 * @property {number} startTimestamp
 * @property {number} endTimestamp
 */

 class BaseProposal {
    constructor(
      id,
      thread,
      frabric,
      creator,
      type,
      state,
      votes,
      info,
      supermajority,
      startTimestamp,
      endTimestamp
    ) {
      this.id = id
      this.thread = thread
      this.frabric = frabric
      this.creator = creator
      this.type = type
      this.state = state
      this.votes = votes
      this.info = info
      this.supermajority = supermajority
      this.startTimestamp = startTimestamp
      this.endTimestamp = endTimestamp
    }
  }
  
  
  export default BaseProposal