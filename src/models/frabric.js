/**
 * Frabric model.
 * @property {string} id ID of the paper proposal
 * @property {FrabricERC20[]} token Thread related to the paper proposal
 * @property {FrabricParticipantRecord[]} participants Frabric related to the paper proposal
 * @property {GovernorStatusRecord} governorStatuses
 * @property {Thread[]} threads
 * @property {ThreadProposal[]} threadProposals
 * @property {ParticipantProposal[]} participantProposals
 * @property {upgradeProposal[]} upgradeProposals
 * @property {TokenActionProposal[]} tokenActionProposals
 * @property {ParticipantRemovalProposal[]} participantRemovalProposals
 * @property {BondRemovalProposal} bondRemovalProposals
 * @property {threadProposalProposal[]} threadProposalProposals
 * @property {PaperProposal[]} paperProposal
 * @property {Voucher[]} vouchers
 */

 class Frabric {
    constructor(
        id,
        token,
        participants,
        governorStatuses,
        threads,
        threadProposals,
        participantProposals,
        upgradeProposals,
        tokenActionProposals,
        participantRemovalProposals,
        bondRemovalProposals,
        threadProposalProposals,
        paperProposals,
        vouchers,
    ) {
        this.id,
        this.token,
        this.participants,
        this.governorStatuses,
        this.threads,
        this.threadProposals,
        this.participantProposals,
        this.upgradeProposals,
        this.tokenActionProposals,
        this.participantRemovalProposals,
        this.bondRemovalProposals,
        this.threadProposalProposals,
        this.paperProposals,
        this.vouchers
    }
  }
  
  
  export default Frabric