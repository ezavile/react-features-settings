import { AppState } from "./models";

export const initialState: AppState = {
  general: {
    id: "general",
    name: "General",
    features: {
      case_managment: {
        id: "case_managment",
        name: "case managment",
        enabled: true,
        features: {},
      },
      notifications: {
        id: "notifications",
        name: "notifications",
        enabled: true,
        features: {},
      },
      map_timeline: {
        id: "map_timeline",
        name: "map timeline",
        enabled: true,
        features: {},
      },
      mass_communications: {
        id: "mass_communications",
        name: "mass communications",
        enabled: true,
        features: {},
      },
      views_and_briefings: {
        id: "views_and_briefings",
        name: "views & briefings",
        enabled: true,
        features: {},
      },
      traffic_cameras: {
        id: "traffic_cameras",
        name: "traffic cameras",
        enabled: true,
        features: {},
      },
    },
  },
  settings: {
    id: "settings",
    name: "Settings",
    features: {
      audit_log: {
        id: "audit_log",
        name: "audit log",
        enabled: true,
        features: {},
      },
      users: {
        id: "users",
        name: "users",
        enabled: true,
        features: {
          users_add: {
            id: "users_add",
            name: "users add",
            enabled: true,
            features: {},
          },
          users_delete: {
            id: "users_delete",
            name: "users delete",
            enabled: true,
            features: {},
          },
          users_edit: {
            id: "users_edit",
            name: "users edit",
            enabled: true,
            features: {},
          },
          max_users: {
            id: "max_users",
            name: "max users",
            enabled: true,
            features: {},
            value: 10,
          },
        },
      },
    },
  },
  alerts: {
    id: "alerts",
    name: "Alerts",
    features: {
      alert_manager: {
        id: "alert_manager",
        name: "alert manager",
        enabled: true,
        features: {},
      },
      alert_rules: {
        id: "alert_rules",
        name: "alert rules",
        enabled: true,
        features: {},
        value: 10,
      },
    },
  },
};
