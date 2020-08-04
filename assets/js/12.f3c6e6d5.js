(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{412:function(e,t,r){e.exports=r.p+"assets/img/usb-erase.1421d457.png"},413:function(e,t,r){e.exports=r.p+"assets/img/usb-folder.03d89774.png"},414:function(e,t,r){e.exports=r.p+"assets/img/usb-folder-highlight.319b4d56.png"},415:function(e,t,r){e.exports=r.p+"assets/img/oc-config-compare.935f00cb.png"},498:function(e,t,r){"use strict";r.r(t);var o=r(25),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"updating-opencore-and-macos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-opencore-and-macos"}},[e._v("#")]),e._v(" Updating OpenCore and macOS")]),e._v(" "),o("h2",{attrs:{id:"updating-opencore"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-opencore"}},[e._v("#")]),e._v(" Updating OpenCore")]),e._v(" "),o("p",[e._v("So the main things to note with updating OpenCore:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Releases"),o("OutboundLink")],1),e._v(" happen the first Monday of every month")]),e._v(" "),o("li",[e._v("The "),o("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Differences/Differences.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Differences.pdf"),o("OutboundLink")],1),e._v(" will tell you all the things added and removed from this version of OpenCore compared to the previous release")]),e._v(" "),o("li",[e._v("The OpenCore Installation Guide will have a note in the "),o("a",{attrs:{href:"https://dortania.github.io/OpenCore-Install-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("header"),o("OutboundLink")],1),e._v(" about what release version it supports")])]),e._v(" "),o("blockquote",[o("p",[e._v("So how do I update?")])]),e._v(" "),o("p",[e._v("So the process goes as follows:")]),e._v(" "),o("ol",[o("li",[o("strong",[e._v("Download the latest release of OpenCore")])])]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCorePkg"),o("OutboundLink")],1)])]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[o("strong",[e._v("Mount your EFI")])])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("So first, lets mount your hard drive's EFI and make a copy somewhere safe with "),o("a",{attrs:{href:"https://github.com/corpnewt/MountEFI",target:"_blank",rel:"noopener noreferrer"}},[e._v("MountEFI"),o("OutboundLink")],1),e._v(". We won't be updating the drive's EFI at first, instead we'll be grabbing a spare USB to be our crash dummy. This allows us to keep a working copy of OpenCore in case our update goes south")])]),e._v(" "),o("li",[o("p",[e._v("For the USB, it must be formatted as GUID. Reason for this is that GUID will automatically create an EFI partition, though this will be hidden by default so you'll need to mount it with MountEFI.")])])]),e._v(" "),o("p",[o("img",{attrs:{src:r(412),alt:""}})]),e._v(" "),o("ul",[o("li",[e._v("Now you can place your OpenCore EFI on the USB")])]),e._v(" "),o("p",[o("img",{attrs:{src:r(413),alt:""}})]),e._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[o("strong",[e._v("Replace the OpenCore files with the ones you just downloaded")])])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("The important ones to update:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("EFI/BOOT/BOOTx64.efi")])]),e._v(" "),o("li",[o("code",[e._v("EFI/OC/OpenCore.efi")])]),e._v(" "),o("li",[o("code",[e._v("EFI/OC/Drivers/OpenRuntime")]),e._v("("),o("strong",[e._v("Don't forget this one, OpenCore will not boot with mismatched versions")]),e._v(")")])])]),e._v(" "),o("li",[o("p",[e._v("You can also update other drivers you have if present, these are just the ones that "),o("strong",[e._v("must")]),e._v(" be updated in order to boot correctly")])])]),e._v(" "),o("p",[o("img",{attrs:{src:r(414),alt:""}})]),e._v(" "),o("ol",{attrs:{start:"4"}},[o("li",[o("strong",[e._v("Compare your config.plist to that of the new Sample.plist")])])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("With this, there's a couple ways to do this:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/corpnewt/OCConfigCompare",target:"_blank",rel:"noopener noreferrer"}},[e._v("OCConfigCompare"),o("OutboundLink")],1),e._v(" to compare between the sample.plist and your config.plist")]),e._v(" "),o("li",[o("code",[e._v("diff (file input 1) (file input 2)")]),e._v(" in terminal")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.scootersoftware.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("BeyondCompare"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Make a new config based off reading the updated OpenCore Vanilla Guide")])])]),e._v(" "),o("li",[o("p",[e._v("Once you've made the adjustments and made sure you config is compliant with the newest release of OpenCore, make sure to double check your setting with the OpenCore Guide on what to set everything to, otherwise read the "),o("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Differences/Differences.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Differences.pdf"),o("OutboundLink")],1),e._v(" if you want to get a bit more technical.")])])]),e._v(" "),o("p",[o("img",{attrs:{src:r(415),alt:""}})]),e._v(" "),o("ol",{attrs:{start:"4"}},[o("li",[o("strong",[e._v("Boot!")])])]),e._v(" "),o("ul",[o("li",[e._v("Once everything's working with the dummy USB, you can mount the EFI and move it over to the hard drive's EFI partition. Remember to keep a copy of your old EFI in cases where OpenCore is acting funny down the road")])]),e._v(" "),o("h2",{attrs:{id:"updating-kexts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-kexts"}},[e._v("#")]),e._v(" Updating Kexts")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Updating Kexts is a similar process to updating OpenCore, make a copy of everything and update on a dummy USB in case there's issues")])]),e._v(" "),o("li",[o("p",[e._v("The easiest way to update your kexts is via 2 tools:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/corpnewt/Lilu-and-Friends",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lilu and Friends"),o("OutboundLink")],1),e._v(" to download and compile the kexts")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/corpnewt/KextExtractor",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kext Extractor"),o("OutboundLink")],1),e._v(" to merge them into your EFI")])])])]),e._v(" "),o("h2",{attrs:{id:"updating-macos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-macos"}},[e._v("#")]),e._v(" Updating macOS")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("So this is probably one of the most challenging parts, maintaining your system through OS updates. The main things to keep in mind:")]),e._v(" "),o("ul",[o("li",[e._v("With OS updates, make sure everything has been updated and you have some form of recovery like TimeMachine or an older macOS installer with a known good EFI on it")]),e._v(" "),o("li",[e._v("Do a bit of google-fu to see if others are having issues with the newest update")])])]),e._v(" "),o("li",[o("p",[e._v("I've also provided a bit more of a detailed map of what's changed in macOS versions, see below:")])])]),e._v(" "),o("p",[o("strong",[e._v("macOS Catalina")])]),e._v(" "),o("ul",[o("li",[e._v("10.15.0\n"),o("ul",[o("li",[o("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Requires proper EC"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Dual socket and most AMD CPUs need "),o("a",{attrs:{href:"https://github.com/acidanthera/bugtracker/files/3703498/AppleMCEReporterDisabler.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("AppleMCEReporterDisabler.kext"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("MacPro5,1 support has been dropped")])])]),e._v(" "),o("li",[e._v("10.15.1\n"),o("ul",[o("li",[e._v("Requires WhateverGreen 1.3.4+")]),e._v(" "),o("li",[e._v("Broke DRM for many GPUs(see "),o("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.Chart.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("DRM Chart"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Requires all previous fixes")])])]),e._v(" "),o("li",[e._v("10.15.2\n"),o("ul",[o("li",[e._v("Fixes Navi support in the installer")]),e._v(" "),o("li",[e._v("Requires all previous fixes")])])]),e._v(" "),o("li",[e._v("10.15.3\n"),o("ul",[o("li",[e._v("No change")]),e._v(" "),o("li",[e._v("Requires all previous fixes")])])]),e._v(" "),o("li",[e._v("10.15.4\n"),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/AMD-OSX/AMD_Vanilla",target:"_blank",rel:"noopener noreferrer"}},[e._v("AMD CPU users need to update "),o("code",[e._v("cpuid_set_cpufamily")]),e._v(" patch"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Fixes DRM on many Ellesmere based Polaris GPUs")]),e._v(" "),o("li",[e._v("Requires all previous fixes(excluding "),o("code",[e._v("shikigva=80")]),e._v(" for Polaris DRM for most users)")])])]),e._v(" "),o("li",[e._v("10.15.5\n"),o("ul",[o("li",[e._v("UHD 630's framebuffer broke for many, if you receive black screen you may need to swap from "),o("code",[e._v("07009B3E")]),e._v(" to "),o("code",[e._v("00009B3E")])]),e._v(" "),o("li",[e._v("Comet Lake S no longer requires a CPU ID spoof")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);