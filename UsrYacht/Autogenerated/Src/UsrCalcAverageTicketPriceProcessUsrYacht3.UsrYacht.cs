namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrCalcAverageTicketPriceProcessUsrYacht3MethodsWrapper

	/// <exclude/>
	public class UsrCalcAverageTicketPriceProcessUsrYacht3MethodsWrapper : ProcessModel
	{

		public UsrCalcAverageTicketPriceProcessUsrYacht3MethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrYacht");
			
			// ОСЬ ТУТ ВИПРАВЛЕНО НА ТВОЮ НАЗВУ КОЛОНКИ (через "a")
			var passengersCountColumn = esq.AddColumn("UsrPassangerCount"); 
			var priceColumn = esq.AddColumn("UsrPrice");
			
			Guid driveTypeId = Get<Guid>("DriveTypeIdParameter");
			var typeFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrDriveType", driveTypeId);
			esq.Filters.Add(typeFilter);
			
			string sqlText = esq.GetSelectQuery(UserConnection).GetSqlText();
			Set("SqlTextParameter", sqlText);
			
			var entityCollection = esq.GetEntityCollection(UserConnection);
			decimal sumTicketPrices = 0;
			int count = entityCollection.Count;
			
			foreach(var entity in entityCollection) {
			    int passengersCount = entity.GetTypedColumnValue<int>(passengersCountColumn.Name);
			    decimal price = entity.GetTypedColumnValue<decimal>(priceColumn.Name);
			    
			    // Маленька порада від мене: захист від ділення на нуль, якщо яхта випадково збережена з 0 пасажирів
			    if (passengersCount > 0) {
			        decimal ticketPrice = price / passengersCount;
			        sumTicketPrices = sumTicketPrices + ticketPrice;
			    }
			}
			
			decimal result = 0;
			if (count > 0) {
			    result = sumTicketPrices / count;
			}
			Set("AvgTicketPriceParameter", result);
			return true;
		}

		#endregion

	}

	#endregion

}

