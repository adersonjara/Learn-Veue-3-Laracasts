import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
	components: { AssignmentList , AssignmentCreate },
	template: `

		<section class="space-y-6">
			<assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
			<assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
		</section>
		
		<assignment-create @add="add"></assignment-create>


	`,
	data() {
		return {
			assignments: [],
			/*newAssignment: ''*/
		}
	},

	created() {
		fetch('http://localhost:3001/assignments')
			.then(response => response.json())
			.then(assignments => {
				this.assignments = assignments
			});
	},

	computed: {
		/*inProgress(){
			return this.assignments.filter(assignment => ! assignment.complete);
		},
		completed(){
			return this.assignments.filter(assignment =>   assignment.complete);
		},*/
		filters(){
			return {
				inProgress: this.assignments.filter(assignment => ! assignment.complete),
				completed:  this.assignments.filter(assignment =>   assignment.complete)
			};
		}
	},

	methods: {
		add(name) {

			this.assignments.push({
				name: name,
				completed: false,
				id: this.assignments.length + 1
			});

			/*this.newAssignment = '';*/
		}
	}
}