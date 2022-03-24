/*!
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import axios from 'axios';
import { useMutation } from 'react-query';

export default function useConfirmMarkTask({
  dagId, runId, taskId, state,
}) {
  return useMutation(
    ['confirmStateChange', dagId, runId, taskId, state],
    ({
      past, future, upstream, downstream,
    }) => axios.get('/confirm', {
      params: {
        dag_id: dagId,
        dag_run_id: runId,
        task_id: taskId,
        past,
        future,
        upstream,
        downstream,
        state,
      },
      headers: {
        Accept: 'application/json',
      },
    }),
  );
}
