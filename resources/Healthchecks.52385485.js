import { s as h } from "./service.541fc1e6.js";
import {
  _ as u,
  G as p,
  r as l,
  o as c,
  c as _,
  w as f,
  a as d,
  b as a,
  t as n,
  e as i,
} from "./index.868de8fa.js";
const m = {
    name: "Healthchecks",
    mixins: [h],
    props: { item: Object },
    components: { Generic: p },
    data: () => ({ api: null }),
    computed: {
      up: function () {
        var e;
        return this.api
          ? (e = this.api.checks) == null
            ? void 0
            : e.filter((t) => t.status.toLowerCase() === "up").length
          : "";
      },
      down: function () {
        var e;
        return this.api
          ? (e = this.api.checks) == null
            ? void 0
            : e.filter((t) => t.status.toLowerCase() === "down").length
          : "";
      },
      grace: function () {
        var e;
        return this.api
          ? (e = this.api.checks) == null
            ? void 0
            : e.filter((t) => t.status.toLowerCase() === "grace").length
          : "";
      },
    },
    created() {
      this.fetchStatus();
    },
    methods: {
      fetchStatus: async function () {
        if (!this.item.apikey) {
          console.error(
            "apikey is not present in config.yml for the Healthchecks entry!"
          );
          return;
        }
        const t = { "X-Api-Key": this.item.apikey };
        this.api = await this.fetch("/api/v1/checks/", { headers: t }).catch(
          (r) => {
            console.error(r);
          }
        );
      },
    },
  },
  k = { class: "notifs" },
  y = { key: 0, class: "notif up", title: "Up" },
  g = { key: 1, class: "notif down", title: "Down" },
  w = { key: 2, class: "notif grace", title: "Grace" };
function v(e, t, r, x, C, s) {
  const o = l("Generic");
  return (
    c(),
    _(
      o,
      { item: r.item },
      {
        indicator: f(() => [
          d("div", k, [
            s.up > 0 ? (c(), a("strong", y, n(s.up), 1)) : i("", !0),
            s.down > 0 ? (c(), a("strong", g, n(s.down), 1)) : i("", !0),
            s.grace > 0 ? (c(), a("strong", w, n(s.grace), 1)) : i("", !0),
          ]),
        ]),
        _: 1,
      },
      8,
      ["item"]
    )
  );
}
const B = u(m, [
  ["render", v],
  ["__scopeId", "data-v-68bdf36c"],
]);
export { B as default };
