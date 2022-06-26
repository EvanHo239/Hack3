var organizationData = [
  // order is organization1, description1, organization2, description2, organization3, description3, why there is a crisis
  ["","Lybia's water resources were already unreliable, but the regime has cut off water for a large portion of the population, causing people to go through severe stretches without food and water."],
  ["","Often described as the “Disputed Territory of Western Sahara,” the colony is home to thousands of Sahrawi refugees who suffer constant food and water shortages due to a decades-long struggle for control between Morocco and the Sahrawi tribal group known as the Polisario Front."],
  ["","Yemen is a hotbed of conflict and a waypoint for terrorists traveling through the Middle East, and as such it is often in a weakened position to receive aid that includes fresh water. The country has little natural fresh water to use and relies heavily on water from other sources. Political strife in the region often prevents the people from receiving many necessities and water is chief among them."],
  ["","Eastern Africa has long been the target of humanitarian aid from familiar acronyms like UNICEF and UNHCR, and Djibouti’s legacy as a refugee corridor and strategic military position has always made it a stress point for adequate water supply."],
  ["","Jordan is in the unfortunate position of being located in the arid and politically divided Middle East while lacking the access to valuable natural resources that its equally waterless neighbors enjoy. This means that it must rely heavily on its own natural water resources, namely the Dead Sea and the Jordan River. Increased desertification and a growing population are acting together to decimate the water supply, and a plan for alternate sources has not been formulated."]
];

function descriptionOne(){
  $(".first-box h2").html("Lybia");
  $(".first-box p").html(organizationData[0][1]);
}
