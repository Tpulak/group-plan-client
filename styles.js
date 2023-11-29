import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  bottomNavContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFBA00",
    width: "100%",
    padding: 10,
  },
  topNavContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  topNavtitle: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  landingPageContainer: {
    backgroundColor: "green",
  },
  recipesMiddleContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  recipesList: {
    width: "100%",
  },
  addRecipebtn: {
    backgroundColor: "#88B361", // You can change the color as needed
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 30,
  },
  addRecipeBtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export const HomePageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export const NavStyles = StyleSheet.create({
  bottomNavContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFBA00",
    width: "100%",
    padding: 10,
  },
  topNavContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  topNavtitle: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
});

export const LandingPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  LandingPageBtn: {
    width: 275, // Adjust the width as needed
    marginTop: 20,
    padding: 15,
    backgroundColor: "#88B361",
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#88B361",
  },
  LandingPageBtnText: { color: "white", fontSize: 18 },
});

export const LoginPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  LoginPageTitle: { fontSize: 24, marginBottom: 20 },
  LoginPageInput: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  LoginPageBtn: {
    width: 200,
    padding: 15,
    backgroundColor: "#88B361",
    borderRadius: 5,
    alignItems: "center",
  },
  LoginPageBtnText: { color: "white", fontSize: 18 },
  usernameInput: {
    marginTop: 30,
  },
});

export const RecipesPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  recipesMiddleContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  recipesList: {
    width: "100%",
  },
  addRecipebtn: {
    backgroundColor: "#88B361", // You can change the color as needed
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 30,
  },
  addRecipeBtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  mealContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    overflow: "hidden",
  },
  mealNameContainer: {
    flex: 1,
    padding: 10,
  },
  mealName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  mealImagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: "#ccc", // Gray color as a placeholder
  },
  Icontxt: {
    textAlign: "center",
  },
});

export const CreateRecipesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  pageContainer: {
    height: "100%",
  },
  middleContainer: {
    alignItems: "center",
    backgroundColor: "white",
  },
  section: {
    width: "90%",
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "left",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    width: "88%",
    paddingLeft: 10,
    borderTopColor: "#88B361",
    borderLeftColor: "#88B361",
    borderBottomColor: "#88B361",
    borderRightColor: "#88B361",
  },
  inputContainer: {
    flexDirection: "row",
    alignContent: "center",
    marginBottom: 10,

    paddingBottom: 15,
    overflow: "hidden",
    justifyContent: "center",
  },
  multiLineInput: {
    height: 50,
    textAlign: "left",
    paddingTop: 15,
  },
  imageUpload: {
    width: 300,
    height: 150,
    backgroundColor: "lightgray",
    marginBottom: 20,
  },
  imagePreview: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  addMoreButton: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFBA00",
    borderRadius: 10,
    backgroundColor: "#FFBA00",
    height: 50,
    justifyContent: "center",
  },
});

export const RecipeDetailsModalStyles = StyleSheet.create({
  modalView: {
    margin: 20,
    marginTop: 100,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionHeader: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "left",
  },
  sectionContent: {
    textAlign: "left",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  closeButton: {
    padding: 10,
    backgroundColor: "#888",
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },
  exportButton: {
    padding: 10,
    backgroundColor: "#88B631",
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});

export const SignUpPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  SignUpPageTitle: { fontSize: 24, marginBottom: 20 },
  SignUpPageInput: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  SignUpPageBtn: {
    width: 200,
    padding: 15,
    backgroundColor: "#88B361",
    borderRadius: 5,
    alignItems: "center",
  },
  SignUpPageBtnText: { color: "white", fontSize: 18 },
});

export const SettingsPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  middleContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
});

export const GroupsPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    flex: 0,
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  middleContainer: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    overflow: "hidden",
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    width: "90%",
  },
  createBtn: {
    borderRadius: 5,
    marginBottom: 10,
  },
  createBtnText: {
    textAlign: "center",
    color: "#fff",
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16,
  },
  pickerContainer: {
    marginTop: 1,
    width: "100%",
    // flex: 1,
  },
  Join_button: {
    margin: 30,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#88B361",
    marginLeft: "auto",
  },
  groupRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  groupName: {
    marginLeft: 10,
    fontSize: 18,
  },

  //MODAL
  modalView: {
    margin: 20,
    marginTop: 100,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 24,
    marginBottom: 15,
    textAlign: "center",
  },
  groupInput: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },

  groupTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  groupTypeText: {
    fontSize: 18,
    marginLeft: 10,
  },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },

  radioButtons: {
    flexDirection: "row",
    marginBottom: 10,
  },
  radioButton: {
    borderWidth: 1,
    borderColor: "#888",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  radioButtonSelected: {
    backgroundColor: "#888",
  },
  radioButtonText: {
    color: "#888",
  },

  groupTypeContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  groupTypeButton: {
    borderWidth: 1,
    borderColor: "#888",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  groupTypeButtonSelected: {
    backgroundColor: "#88B361",
  },
  groupTypeButtonText: {
    color: "black",
  },
});

export const GroupCardStyles = StyleSheet.create({
  UserGroupContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    overflow: "hidden",
  },
  UserGroupNameContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "",
  },
  UserGroupName: {
    fontSize: 20,
    // fontWeight: "bold",
  },
  UserGroupImagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: "#88B361", // Gray color as a placeholder
  },

  GroupContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  GroupNameContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    marginLeft: 10,
    marginRight: 10,
  },
  GroupName: {
    fontSize: 20,
    // fontWeight: "bold",
  },
  GroupBtn: {
    width: 80,
    height: "100%",
    backgroundColor: "#88B361",
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center",
  },
});

export const MembersModalStyles = StyleSheet.create({
  modalView: {
    margin: 20,
    marginTop: 100,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  closeButton: {
    padding: 10,
    backgroundColor: "#888",
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export const CartPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "green",
    padding: 25,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    width: 50,
    height: 50,
  },
  title: {
    flex: 2,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  recommendedMeals: {
    fontSize: 18,
    marginBottom: 10,
  },
  imageContainer: {
    width: 200,
    height: 200,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    alignItems: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "green",
    width: "100%",
    padding: 25,
  },

  middleContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  checklistContainer: {
    width: "100%",
  },
  checklistItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "black",
    marginRight: 10,
  },
  checkboxChecked: {
    width: 20,
    height: 20,
    backgroundColor: "green",
    marginRight: 10,
  },
  ingredientName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  importButton: {
    backgroundColor: "#88B361",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 30,
  },
  importButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  Icontxt: {
    textAlign: "center",
  },
});

export const DetailedGroupPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  groupContainer: {
    flex: 1,
    justifyContent: "space-around",
  },
  topContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15,
  },
  currentPoll: {
    justifyContent: "center",
    backgroundColor: "lightgrey",
    height: 200,
    marginLeft: 10,
    marginRight: 10,
  },
  startPoll: {
    justifyContent: "center",
    backgroundColor: "#88B361",
    height: 100,
    marginLeft: 10,
    marginRight: 10,
  },
  currentMeal: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  membersButton: {
    backgroundColor: "#88B361",
    padding: 10,
    borderRadius: 10,
  },
  mealContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    overflow: "hidden",
  },
  mealNameContainer: {
    flex: 1,
    padding: 10,
  },
  mealName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  mealImagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: "#ccc", // Gray color as a placeholder
  },
});

export const PollPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  middleContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  pollPageBtnContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
  },
  pollPageBtn: {
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#88B361",
    width: "90%",
  },
  pollPageBtnText: {
    textAlign: "center",
    color: "#fff",
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16,
  },
});
