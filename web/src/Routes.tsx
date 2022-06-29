// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import AssessmentsLayout from 'src/layouts/AssessmentsLayout'
import ShiftAssignmentsLayout from 'src/layouts/ShiftAssignmentsLayout'
import ShiftsLayout from 'src/layouts/ShiftsLayout'
import LocationsLayout from 'src/layouts/LocationsLayout'
import WorksitesLayout from 'src/layouts/WorksitesLayout'
import AddressesLayout from 'src/layouts/AddressesLayout'
import WorkersLayout from 'src/layouts/WorkersLayout'
import AdminLayout from 'src/layouts/AdminLayout'
import HomePage from 'src/pages/HomePage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AdminLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Set wrap={ShiftsLayout}>
          <Route path="/shifts/new" page={ShiftNewShiftPage} name="newShift" />
          <Route path="/shifts/{id:Int}/edit" page={ShiftEditShiftPage} name="editShift" />
          <Route path="/shifts/{id:Int}" page={ShiftShiftPage} name="shift" />
          <Route path="/shifts" page={ShiftShiftsPage} name="shifts" />
        </Set>
        <Set wrap={LocationsLayout}>
          <Route path="/locations/new" page={LocationNewLocationPage} name="newLocation" />
          <Route path="/locations/{id:Int}/edit" page={LocationEditLocationPage} name="editLocation" />
          <Route path="/locations/{id:Int}" page={LocationLocationPage} name="location" />
          <Route path="/locations" page={LocationLocationsPage} name="locations" />
        </Set>
        <Set wrap={WorksitesLayout}>
          <Route path="/worksites/new" page={WorksiteNewWorksitePage} name="newWorksite" />
          <Route path="/worksites/{id:Int}/edit" page={WorksiteEditWorksitePage} name="editWorksite" />
          <Route path="/worksites/{id:Int}" page={WorksiteWorksitePage} name="worksite" />
          <Route path="/worksites" page={WorksiteWorksitesPage} name="worksites" />
        </Set>
        <Set wrap={AddressesLayout}>
          <Route path="/addresses/new" page={AddressNewAddressPage} name="newAddress" />
          <Route path="/addresses/{id:Int}/edit" page={AddressEditAddressPage} name="editAddress" />
          <Route path="/addresses/{id:Int}" page={AddressAddressPage} name="address" />
          <Route path="/addresses" page={AddressAddressesPage} name="addresses" />
        </Set>
        <Set wrap={WorkersLayout}>
          <Route path="/workers/new" page={WorkerNewWorkerPage} name="newWorker" />
          <Route path="/workers/{id:Int}/edit" page={WorkerEditWorkerPage} name="editWorker" />
          <Route path="/workers/{id:Int}" page={WorkerWorkerPage} name="worker" />
          <Route path="/workers" page={WorkerWorkersPage} name="workers" />
        </Set>
        <Set wrap={ShiftAssignmentsLayout}>
          <Route path="/shift-assignments/new" page={ShiftAssignmentNewShiftAssignmentPage} name="newShiftAssignment" />
          <Route path="/shift-assignments/{id:Int}/edit" page={ShiftAssignmentEditShiftAssignmentPage} name="editShiftAssignment" />
          <Route path="/shift-assignments/{id:Int}" page={ShiftAssignmentShiftAssignmentPage} name="shiftAssignment" />
          <Route path="/shift-assignments" page={ShiftAssignmentShiftAssignmentsPage} name="shiftAssignments" />
        </Set>
        <Set wrap={AssessmentsLayout}>
          <Route path="/assessments/new" page={AssessmentNewAssessmentPage} name="newAssessment" />
          <Route path="/assessments/{id:Int}/edit" page={AssessmentEditAssessmentPage} name="editAssessment" />
          <Route path="/assessments/{id:Int}" page={AssessmentAssessmentPage} name="assessment" />
          <Route path="/assessments" page={AssessmentAssessmentsPage} name="assessments" />
        </Set>
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
