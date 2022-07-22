<template>
  <div v-if="proposal" class="has-full-borders has-radius-md panel-dark-gray">
    <div class="container">
      <div class="row">
        <strong>{{ endDateString }}</strong
        >, (<strong>{{ timeRemainingString }}</strong> left)
      </div>
      <div class="row">
        <h2 class="is-size-3 pl-5 pr-5 pt-4">Open space, for relaxing with  a fountain</h2>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";
import Proposal from "../../models/proposal";
export default {
  name: "ProposalListItem",
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

          let t = this.proposal.endTimestamp - now;

          if (t >= 0) {
            let days = Math.floor(t / (60 * 60 * 24));
            let hours = Math.floor((t % (60 * 60 * 24)) / (60 * 60));
            let mins = Math.floor((t % (60 * 60)) / 60);
            let secs = Math.floor(t % 60);

            this.timeRemainingString = `${days}d, ${hours}h, ${mins}m, ${secs}s`;
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