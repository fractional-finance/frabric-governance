// import {
//   gql
// } from "@apollo/client/core"
import gql from "graphql-tag";

//Common Proposal Types Query Section
const UPGRADE_PROPOSAL_QUERY = gql `
  query {
    upgradeProposals {
      id
      frabric {
        id
      }
      thread {
        id
      }
      beacon
      instance
      version
      code
      data
      baseProposal {
        id
        thread {
          id
        }
        frabric {
          id
        }
        creator
        type
        state
        votes {
          id
          voter
          voteDirection
          count
        }
        info
      }
    }
  }
`

const TOKEN_ACTION_PROPOSAL_QUERY = gql`
  query {
    tokenActionProposals {
        id
        frabric {
          id
        }
        thread {
          id
        }
        token
        target
        mint
        price
        amount
        baseProposal {
          id
          thread {
            id
          }
          frabric {
            id
          }
          creator
          type
          state
          votes {
            id
            voter
            voteDirection
            count
          }
          info
        }
      }
  }
`

const PARTICIPANT_REMOVAL_PROPOSAL_QUERY = gql`
  query {
    participantRemovalProposals {
        id
        frabric {
          id
        }
        thread {
          id
        }
        participant
        removalFee
        baseProposal {
          id
          thread {
            id
          }
          frabric {
            id
          }
          creator
          type
          state
          votes {
            id
            voter
            voteDirection
            count
          }
          info
        }
      }
  }
`


// Frabric Specific Proposal Type Query Section
const PARTICIPANT_PROPOSAL_QUERY = gql`
  query {
    participantProposals {
      id
      proposer
      participant
      baseProposal {
        id
        thread {
          id
        }
        frabric {
          id
        }
        creator
        type
        state
        votes {
          id
          voter
          voteDirection
          count
        }
        info
      }
    }
  }
`

const BOND_REMOVAL_PROPOSAL_QUERY = gql`
  query {
    bondRemovalProposals {
      id
      frabric {
        id
      }
      participant
      slash
      amount
      baseProposal {
        id
        thread {
          id
        }
        frabric {
          id
        }
        creator
        type
        state
        votes {
          id
          voter
          voteDirection
          count
        }
        info
      }
    }
  }
`

const THREAD_PROPOSAL_QUERY = gql`
  query ThreadProposals {
    threadProposals {
      id
      governor
      name
      symbol
      descriptor
      data
      baseProposal {
        id
        thread {
          id
        }
        frabric {
          id
        }
        creator
        type
        state
        votes {
          id
          voter
          voteDirection
          count
        }
        info
      }
    }
  }
`

const THREAD_PROPOSAL_PROPOSALS_QUERY = gql`
  query {
    threadProposalProposals {
      id
      frabric {
        id
      }
      thread
      info
      baseProposal {
        id
        thread {
          id
        }
        frabric {
          id
        }
        creator
        type
        state
        votes {
          id
          voter
          voteDirection
          count
        }
        info
      }
    }
  }
`

// Thread Proposal Types Query Section
const DESCRIPTOR_CHANGE_PROPOSAL_QUERY = gql`
  query {
    desriptorChangeProposals {
        id
        descriptor
        baseProposal {
          id
          thread {
            id
          }
          frabric {
            id
          }
          creator
          type
          state
          votes {
            id
            voter
            voteDirection
            count
          }
          info
        }
      }
  }
`

const FRABRIC_CHANGE_PROPOSAL_QUERY = gql`
  query {
    frabricChangeProposals {
        id
        frabric
        thread {
          id
        }
        governor
        baseProposal {
          id
          thread {
            id
          }
          frabric {
            id
          }
          creator
          type
          state
          votes {
            id
            voter
            voteDirection
            count
          }
          info
        }
      }
  }
`

const GOVERNOR_CHANGE_PROPOSAL_QUERY = gql`
  query {
    governorChangeProposals {
        id
        thread {
          id
        }
        governor
        baseProposal {
          id
          thread {
            id
          }
          frabric {
            id
          }
          creator
          type
          state
          votes {
            id
            voter
            voteDirection
            count
          }
          info
        }
      }
  }
`

const ECOSYSTEM_LEAVE_PROPOSAL_QUERY = gql`
  query {
    ecosystemLeaveWithUpgradesProposals {
        id
        frabric
        thread {
          id
        }
        governor
        baseProposal {
          id
          thread {
            id
          }
          frabric {
            id
          }
          creator
          type
          state
          votes {
            id
            voter
            voteDirection
            count
          }
          info
        }
      }
  }
`

const DISSOLUTION_PROPOSAL_QUERY = gql`
  query {
    dissolutionProposals {
        id
        thread {
          id
        }
        token
        price
        baseProposal {
          id
          thread {
            id
          }
          frabric {
            id
          }
          creator
          type
          state
          votes {
            id
            voter
            voteDirection
            count
          }
          info
        }
      }
  }
`

const ALL_ASSET_PROPOSALS_QUERY = gql`
  query Proposals($assetId: String!) {
    proposals(asset: $assetId) {
      id
      creator
      dataURI
      votes {
        id
        voter
        voteType
        count
      }
      startTimestamp
      endTimestamp
    }
  }
`

const ALL_ASSETS_QUERY = gql`
  query {
    deployedAssets {
      id
      mintedAsset {
        id
        dataURI
      }
      contract
      symbol
      numOfShares
      owners {
        id
        owner
        shares
      }
      marketOrders {
        id
        orderType
        price
        amount
      }
      proposals {
        id
        creator
        dataURI
        votes {
          id
          voter
          voteType
          count
        }
        startTimestamp
        endTimestamp
      }
    }
  }
`

export {
  ALL_ASSET_PROPOSALS_QUERY,
  ALL_ASSETS_QUERY,
  UPGRADE_PROPOSAL_QUERY,
  TOKEN_ACTION_PROPOSAL_QUERY,
  PARTICIPANT_REMOVAL_PROPOSAL_QUERY,
  PARTICIPANT_PROPOSAL_QUERY,
  BOND_REMOVAL_PROPOSAL_QUERY,
  THREAD_PROPOSAL_PROPOSALS_QUERY,
  THREAD_PROPOSAL_QUERY,
  DESCRIPTOR_CHANGE_PROPOSAL_QUERY,
  FRABRIC_CHANGE_PROPOSAL_QUERY,
  GOVERNOR_CHANGE_PROPOSAL_QUERY,
  ECOSYSTEM_LEAVE_PROPOSAL_QUERY,
  DISSOLUTION_PROPOSAL_QUERY
}
