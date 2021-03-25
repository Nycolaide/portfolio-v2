import store from "@/store";

function generateVersion(version: any) {
  const dateUpdate = new Date();
  localStorage.setItem("app_version", version);
  localStorage.setItem("app_updated", String(dateUpdate));
}

export function ControlReleaseCore(release: any) {
  console.log("ControlReleaseCore", release);
  const versionLocal = localStorage.getItem("app_version");

  store.commit("application/updateNotification", {
    show: true,
    text: `Vous utilisez désormais la version ` + release,
    timeout: "8000",
  });

  if (versionLocal) {
    console.log("ControlReleaseCore je suis rentré", release, versionLocal);
    if (versionLocal !== release.data.version) {
      console.log("entrer");
      localStorage.clear();
      generateVersion(release.data.version);
      window.location.reload(true);
    }
  } else {
    generateVersion(release.data.version);
  }
}
