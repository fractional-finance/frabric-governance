<template>
  <div v-if="proposal" class="proposal-panel has-radius-md">
    <div class="container">
      <div class="row">
        <strong v-if="ended" class="time">{{ endDateString }}</strong>
        <strong v-else class="time">{{ timeRemainingString }}</strong>
      </div>
      <div class="row">
        <h2 class="title">Open space, for relaxing with  a fountain</h2>
      </div>
      <div class="row pt-2">
        <span class="description">It is a long established fact that a reader will be distract ed by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</span>
      </div>
      <div class="row button-wrapper mt-3">
        <div>
          <a class="link" href="#">https://chat.thefrabric.com/</a>
          <div>
            <div class="quantum-state" />
            <span>quantum Not reached</span>
          </div>
        </div>
        <div>
          <button class="button title is-mediumBlue">Vote</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.time {
  color: #968EFF;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
}
.proposal-panel {
  padding: 1rem;
  background-color: #1D1B22 !important;
}
.title {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
  color: #FFFFFF;
}
.description {
  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
}
.link {
  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  color: #968EFF;
}
.button-wrapper {
  display: flex;
  justify-content: space-between;
}
.quantum-state {
  height: 25px;
  width: 25px;
  left: 11px;
  top: 216px;
  border-radius: 50%;
  background-color: red;
  border-radius: 0px;
}
</style>

<script>

import { mapActions, mapGetters } from "vuex";
import Proposal from "../../models/proposal";
import Button from "../views/common/Button.vue";

export default {
  name: "ProposalListItem",
  components: {
    // Button,
  },
  props: {
    proposal: {
      type: Proposal,
      required: true,
    }
  },
  data() {
    return {
      countdownRef: "",
      timeRemainingString: "",
    }
  },
  computed: {
    startDateString() {
      return this.dateStringForTimestamp(this.proposal.startTimestamp);
    },
    endDateString() {
      return this.dateStringForTimestamp(this.proposal.endTimestamp);
    },
    
    ended() {
      let now = new Date().getTime() / 1000;
      let t = this.proposal.endTimestamp - now;

      return t < 0;
    },
    passed() {
      const votes = this.votes;
      if (votes.yes.count > votes.no.count) {
        return this.PASSED.Yes;
      } else if (votes.yes.count < votes.no.count) {
        return this.PASSED.No;
      }
      return this.PASSED.Tie;
    },
  },
  methods: {
    setTimeRemainingCountdown() {
      clearInterval(this.countdownRef);

      this.countdownRef = setInterval(
        function () {
          let now = new Date().getTime() / 1000;

          let t = now - this.proposal.endTimestamp;

          if (t >= 0) {
            let days = Math.floor(t / (60 * 60 * 24));
            let hours = Math.floor((t % (60 * 60 * 24)) / (60 * 60));
            let mins = Math.floor((t % (60 * 60)) / 60);
            let secs = Math.floor(t % 60);

            this.timeRemainingString = `${days}d, ${hours}h, ${mins}m, ${secs}s left`;
          } else {
            this.timeRemainingString = "The voting is over";
          }
        }.bind(this),
        1000
      );
    },
    dateStringForTimestamp(timestamp) {
      var date = new Date(timestamp * 1000);

      var hours = date.getHours();
      var minutes = date.getMinutes();
      var suffix = " AM";

      if (hours > 11) {
        hours = 24 - hours;
        suffix = " PM";
      }

      const padWithZeroes = (nr) => (nr < 10 ? "0" + nr : nr);

      return `${date.getFullYear()}-${padWithZeroes(
        date.getMonth() + 1
      )}-${padWithZeroes(date.getDate())}, ${padWithZeroes(
        hours
      )}:${padWithZeroes(minutes)} ${suffix}`;
    },
  },

  created() {
    this.setTimeRemainingCountdown();
  }
}
</script>