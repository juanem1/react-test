import React from 'react';
import TextInput from '../partials/TextInput';
import SelectInput from '../partials/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput name="title" label="title" value={course.title} onChange={onChange} />
      <SelectInput name="authorId" label="Author" value={course.authorId} defautOption="Select Author" options={allAuthors} onChange={onChange} />
      <TextInput name="category" label="Category" value={course.category} onChange={onChange} />
      <TextInput name="lenght" label="Lenght" value={course.lenght} onChange={onChange} />
      <button type="submit" className="btn btn-primary" disable={loading} onClick={onSave}>{loading ? 'Saving...' : 'Save'}</button>
    </form>
  );
};

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CourseForm;
