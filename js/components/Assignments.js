import AssignmentList from "./AssignmentList.js";

export default {
	components: { AssignmentList },
	template: `

		<section class="space-y-6">
			<assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
			<assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
		</section>
		

		<!-- <section v-show="completedAssignments.length" class="mt-8">
			<h2 class="font-bold mb-2">Completed</h2>
			<ul>
				<li
					v-for="assignment in completedAssignments"
					:key="assignment.id"
				>
					<label>
						{{ assignment.name }}
						<input type="checkbox" v-model="assignment.complete">
					</label>
				</li>
				
			</ul>
		</section> -->
		

	`,
	data() {
		return {
			assignments: [
				{name: 'Finish project', complete: false, id: 1},
				{name: 'Read Chapter 4', complete: false, id: 2},
				{name: 'Turn in Homework', complete: false, id: 3},
			]
		}
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
	}
}