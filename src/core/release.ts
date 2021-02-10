import store from "@/store";

function generateVersion(version: string) {
  const dateUpdate = new Date();
  localStorage.setItem("app_version", version);
  localStorage.setItem("app_updated", String(dateUpdate));
}

export function ControlReleaseCore(release: string) {
  const versionLocal = localStorage.getItem("app_version");

  store.commit("application/updateNotification", {
    show: true,
    text: `Vous utilisez désormais la version ` + release,
    timeout: "8000",
  });

  if (versionLocal) {
    if (versionLocal !== release) {
      localStorage.clear();
      generateVersion(release);
    }
  } else {
    generateVersion(release);
  }
}
